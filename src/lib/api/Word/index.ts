import qs from 'qs';
import axios, { Canceler } from 'axios';
import { ContentType, getClient, getConfigure } from '../client';
import { WordListParam, WordListResult } from './model';
import { BaseWord, PartsOfSpeechType, WordDetail, WordItem, WordUpdate } from '../../../model/api/Word';
import { IncludedClassType } from '../../../model/api';

export const WORD = 'word/';
const WORD_LIST = WORD + 'list';

export const WORD_LIST_CANCEL_KEY = 'word_list_cancel_key';

const words = new Array<WordItem>()
for (var i = 0; i < 11; i++) {
    words.push({
        id: i,
        from: { value: `word-${i}`, code: 'ENG', phonetic: `word-phonetic-${i}`, },
        to: { value: `단어-${i}`, code: 'KOR', phonetic: `단어-발음-${i}`, },
        level: (i % 3),
        includedClass: IncludedClassType.MIDDLE,
        partsOfSpeech: PartsOfSpeechType.ADVERB,
        imageUrls: ['http://m.navert.com/image1.jpeg'],
        description: `이 단어의 어원은 ${i}의 로마자인 ${i} 에서 부터 온 단어이다`,
        synonyms: ['truck'],
        point: 1000 + i
    })
}

export var cancelerWordList: Canceler | undefined
export const wordList = async (payload: WordListParam) => {
    const viewCount = 10
    if (cancelerWordList) {
        cancelerWordList(WORD_LIST_CANCEL_KEY)
    }
    const configure = getConfigure(ContentType.none, {
        ...payload,
    })

    const CancelToken = axios.CancelToken;
    configure.cancelToken = new CancelToken(function executor(c) {
        cancelerWordList = c;
    });
    try {
        // const response = await getClient('api').get<WordListResult>(
        //     WORD_LIST,
        //     configure
        // );
        // cancelerArticlesSearchList = undefined
        // return response

        const startIndex = (payload.page - 1) * viewCount
        return {
            item: words.slice(startIndex, startIndex + 10),
            pagination: {
                totalItemCount: words.length,
                totalPageCount: (words.length / 10) + (words.length % 10 === 0 ? 0 : 1)
            }
        }
    } catch (error) {
        if (error instanceof Error) {
            if (error.message === WORD_LIST_CANCEL_KEY) {
                throw new Error('wordList cancel...');
            }
        }
        throw error;
    }
}

export const wordDetail = async (id1: number) => {
    console.log('api wordDetail...', JSON.stringify(words, null, 4), id1)
    const configure = getConfigure(ContentType.none)
    try {
        // const response = await getClient('api').get<WordDetail>(
        //     WORD + id,
        //     configure
        // )
        // return response



        const index = words.findIndex(item => item.id === Number(id1))
        console.log('find index', index)
        return words[index] as WordDetail
    } catch (error) {
        throw error;
    }
}

export const wordUpdate = async (id: number) => {
    const configure = getConfigure(ContentType.none)
    try {
        // const response = await getClient('api').get<WordDetail>(
        //     WORD + id,
        //     configure
        // )
        // return response

        const index = words.findIndex(item => item.id === id)
        return words[index] as WordUpdate
    } catch (error) {
        throw error;
    }
}

export const updateWordDetail = async (id: number, payload: BaseWord) => {
    const configure = getConfigure(ContentType.none)
    try {
        // const response = await getClient('api').put(
        //     WORD + id,
        //     qs.stringify(payload),
        //     configure
        // )
        // return response

        const index = words.findIndex(item => item.id === id)
        words[index] = { ...payload, id: id }
        return index
    } catch (error) {
        throw error;
    }
}

export const createWordDetail = async (payload: BaseWord) => {
    const configure = getConfigure(ContentType.none)
    try {
        // const response = await getClient('api').post(
        //     WORD,
        //     qs.stringify(payload),
        //     configure
        // )
        // return response

        var index = words.length;
        var temp = { ...payload, id: Number(index) }
        words.push(temp)
        return index
    } catch (error) {
        throw error;
    }
}
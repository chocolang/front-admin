import qs from 'qs';
import axios, { Canceler } from 'axios';
import { ContentType, getClient, getConfigure } from '../client';
import { WordListParam } from './model';
import { WordDetail, WordItem } from '../../../model/api/Word';
import { UpdateWordDetail } from '../../../model/binding/UpdateWordDetail';
import { CreateWordDetail } from '../../../model/binding/CreateWordDetail';

export const WORD = 'word/';
const WORD_LIST = WORD + 'list';

export const WORD_LIST_CANCEL_KEY = 'word_list_cancel_key';

const words = new Array<any>()
for (var i = 0; i < 10; i++) {
    words.push({ id: String(i), name: `word${i}`, level: (i % 3), description: "자동차", synonyms: ['truck'], point: 1000 + i },)
}

export var cancelerWordList: Canceler | undefined
export const wordList = async (payload: WordListParam) => {
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

        return words as Array<WordItem>
    } catch (error) {
        if (error instanceof Error) {
            if (error.message === WORD_LIST_CANCEL_KEY) {
                throw new Error('wordList cancel...');
            }
        }
        throw error;
    }
}

export const wordDetail = async (id: string) => {
    const configure = getConfigure(ContentType.none)
    try {
        // const response = await getClient('api').get<WordDetail>(
        //     WORD + id,
        //     configure
        // )
        // return response

        const index = words.findIndex(item => item.id === id)
        return words[index] as WordDetail
    } catch (error) {
        throw error;
    }
}

export const updateWordDetail = async (id: string, payload: UpdateWordDetail) => {
    const configure = getConfigure(ContentType.none)
    try {
        // const response = await getClient('api').put(
        //     WORD + id,
        //     qs.stringify(payload),
        //     configure
        // )
        // return response

        const index = words.findIndex(item => item.id === id)
        payload.id = id
        words[index] = payload
        return index
    } catch (error) {
        throw error;
    }
}

export const createWordDetail = async (payload: CreateWordDetail) => {
    const configure = getConfigure(ContentType.none)
    try {
        // const response = await getClient('api').post(
        //     WORD,
        //     qs.stringify(payload),
        //     configure
        // )
        // return response

        var index = words.length;
        words.push(payload)
        words[index].id = String(index)
        return index
    } catch (error) {
        throw error;
    }
}

export interface IAuthContext {
  login: () => void
  token: string | undefined,
  setToken: React.Dispatch<React.SetStateAction<string>>
}
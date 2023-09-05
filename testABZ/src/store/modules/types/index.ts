export type IUsers = {
    id: number | null,
    name: string,
    email: string,
    phone: string,
    position: string,
    positionId: number | null,
    photo: string
}
export type InitialState = {
    users: IUsers[] | null,
    totalUsers: number,
    status: string,
    error: string,
    loading: boolean,
}
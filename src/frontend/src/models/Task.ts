export default interface ITask {
    _id: string,
    name: string,
    creator: string,
    description: string,
    datetime?: Date,
}

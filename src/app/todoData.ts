export interface Todo {
    id: number,
    title: string
    isCompleted: boolean
}

export const todoData = [
    {
        id: 1,
        title: 'Buy milk',
        isCompleted: false
    },
    {
        id: 2,
        title: 'Watch serial',
        isCompleted: false
    },
    {
        id: 3,
        title: 'Write some code',
        isCompleted: false
    }
]
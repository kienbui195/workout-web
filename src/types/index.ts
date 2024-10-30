export interface IWorkout {
  id: number
  name: string
  exercises: {
    id: number
    name: string
    desc: any
    duration: string
    exercises: {
      data: {
        id: number
        attributes: {
          name: string
          desc: any
          videoId: any
          createdAt: string
          updatedAt: string
        }
      }[]
    }
  }[]
}

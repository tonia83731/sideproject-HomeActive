import TodoCollection from "./TodoCollection"
import TodoAdd from "./TodoAdd"


const dummyHomeactives = [
  {
    id: 1,
    work_name: "Sweeping the Floor",
    exercise: [
      {
        id: 1,
        name: "Floor Sweep",
        link: "https://programme.app/exercises/floor-sweep/335",
      }
    ]
  },
  {
    id: 2,
    work_name: "Washing the window",
    exercise: [
      {
        id: 2,
        name: "Single Arm KB Press",
        link: "https://programme.app/exercises/single-arm-kb-press/842",
      },
      {
        id: 3,
        name: "Barbell Reverse Curl to Press",
        link: "https://programme.app/exercises/barbell-reverse-curl-to-press/106",
      }
    ]
  },
  {
    id: 3,
    work_name: "Vaccuming",
    exercise: [
      {
        id: 4,
        name: "Sliding Reverse Lunge",
        link: "https://programme.app/exercises/sliding-reverse-lunge/916",
      },
    ]
  },
  {
    id: 4,
    work_name: "Refresh Linens",
    exercise: [
      {
        id: 5,
        name: "Barbell Narrow Grip Curls",
        link: "https://programme.app/exercises/barbell-narrow-grip-curls/105",
      },
      {
        id: 6,
        name: "DB Full Moon",
        link: "https://programme.app/exercises/db-full-moon/234",
      },
    ]
  },
  {
    id: 5,
    work_name: "Preparing meal and Cleaning up kitchen",
    exercise: [
      {
        id: 7,
        name: "Tip Toe March",
        link: "https://programme.app/exercises/tip-toe-march/1012",
      },
    ]
  },
  {
    id: 6,
    work_name: "Walking Pets",
    exercise: [
      {
        id: 8,
        name: "A-Skip",
        link: "https://programme.app/exercises/a-skip/13",
      },
      {
        id: 9,
        name: "Butt Kicks",
        link: "https://programme.app/exercises/butt-kicks/167",
      },
    ]
  },
  {
    id: 5,
    work_name: "Doing Laundry",
    exercise: [
      {
        id: 10,
        name: "Goblet Squat to Release",
        link: "https://programme.app/exercises/goblet-squat-to-release/375",
      },
    ]
  },
  {
    id: 6,
    work_name: "Mowing the lawn",
    exercise: [
      {
        id: 10,
        name: "High Knees",
        link: "https://programme.app/exercises/high-knees/433",
      },
    ]
  },
  {
    id: 7,
    work_name: "Cleaning refrigerator",
    exercise: [
      {
        id: 11,
        name: "Horse Stance Thoracic Reaches",
        link: "https://programme.app/exercises/horse-stance-thoracic-reaches/456",
      },
    ]
  },
  {
    id: 7,
    work_name: "Grocery Shopping",
    exercise: [
      {
        id: 12,
        name: "Walk Forward on Forefoot with External Rotation",
        link: "https://programme.app/exercises/walk-forward-on-forefoot-with-external-rotation/1087",
      },
      {
        id: 13,
        name: "Walk Forward on Forfoot",
        link: "https://programme.app/exercises/walk-forward-on-forfoot/1089",
      },
    ]
  },
  {
    id: 8,
    work_name: "Washing the Car",
    exercise: [
      {
        id: 14,
        name: "Front Raises",
        link: "https://programme.app/exercises/front-raises/354",
      },

    ]
  },
  {
    id: 9,
    work_name: "Organizing the attic and storage room",
    exercise: [
      {
        id: 15,
        name: "DB Crush Grip Jefferson Curl",
        link: "https://programme.app/exercises/db-crush-grip-jefferson-curl/224",
      },
    ]
  },
  {
    id: 10,
    work_name: "Growing Vegtables and Fruit",
    exercise: [
      {
        id: 16,
        name: "Landmine Narrow Stance Squat",
        link: "https://programme.app/exercises/landmine-narrow-stance-squat/550",
      },
    ]
  },
]


const dummyTodos = [
  {
    id: 1,
    title: "Do the laundury",
    type:"housework",
    isEdit: false,
    isDone: false,
    isExercise: [10]
  },
  {
    id: 2,
    title: "Clients online meetings",
    type:"work",
    isEdit: false,
    isDone: true,
    isExercise: []
  },
  {
    id: 3,
    title: "See a dentist",
    type:"others",
    isEdit: false,
    isDone: false,
    isExercise: []
  },
  {
    id: 4,
    title: "Attend parent-teacher meetings",
    type:"others",
    isEdit: false,
    isDone: false,
    isExercise: []
  },
  {
    id: 5,
    title: "Grocery Shopping",
    type:"housework",
    isEdit: false,
    isDone: false,
    isExercise: [12, 13]
  },
  {
    id: 6,
    title: "Doing the Laundury",
    type:"housework",
    isEdit: false,
    isDone: false,
    isExercise: [10]
  },
  {
    id: 7,
    title: "Preparing meal",
    type:"housework",
    isEdit: false,
    isDone: false,
    isExercise: [7]
  },
  {
    id: 8,
    title: "Yoga class",
    type:"exercise",
    isEdit: false,
    isDone: false,
    isExercise: []
  },
]

export default function Todo(){
  return(
    <section className="todo">
      <div className="todo-container">
        <TodoAdd/>
        <TodoCollection todos={dummyTodos}/>
      </div>
    </section>
  )
}

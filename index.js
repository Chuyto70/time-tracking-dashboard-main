import { inserHtmlDay, inserHtmlWeek, inserHtmlMonth } from './function.js'
//Get the data
const data = await fetch('./data.json').then((info) => {
        return info.json()
    })
    //get the HTML
const activitis = [...document.querySelectorAll('.activities-container')]
const daily = document.querySelector('.daily')
const weekly = document.querySelector('.weekly')
const mothly = document.querySelector('.monthly')

//Variables that i will need
const days = ["Work", "Play", "Study", "Exercise", "Social", "Self Care"]
let dailyTime = [];
let weeklyTime = [];
let monthlyTime = [];

//Using map to filter the data
data.map((element) => {
    let title = element.title
    let timeDaily = element.timeframes.daily;
    let timeWeekly = element.timeframes.weekly;
    let timeMonthly = element.timeframes.monthly;
    dailyTime.push({ title, timeDaily })
    weeklyTime.push({ title, timeWeekly })
    monthlyTime.push({ title, timeMonthly })

})

//Printing the data in the HTML

daily.addEventListener('click', () => {
    inserHtmlDay(activitis, days, dailyTime, "day", dailyTime)

})
weekly.addEventListener('click', () => {
    inserHtmlWeek(activitis, days, weeklyTime, "week", weeklyTime)
})
mothly.addEventListener('click', () => {
    inserHtmlMonth(activitis, days, monthlyTime, "month", monthlyTime)
})
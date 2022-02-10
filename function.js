  function inserHtmlDay(html, days, tiempo, currentLast, lastTime) {
      for (let i = 0; i < html.length; i++) {
          html[i].children[1].innerHTML = `
                    <span>${days[i]}</span>
                    <p class="hours">${tiempo[i].timeDaily.current}hrs</p>
                    <span class="last-data">Last ${currentLast} - ${lastTime[i].timeDaily.previous}hrs</span>
           `
      }
  }

  function inserHtmlWeek(html, days, tiempo, currentLast, lastTime) {
      for (let i = 0; i < html.length; i++) {
          html[i].children[1].innerHTML = `
                    <span>${days[i]}</span>
                    <p class="hours">${tiempo[i].timeWeekly.current}hrs</p>
                    <span class="last-data">Last ${currentLast} - ${lastTime[i].timeWeekly.previous}hrs</span>
           `
      }
  }

  function inserHtmlMonth(html, days, tiempo, currentLast, lastTime) {
      for (let i = 0; i < html.length; i++) {
          html[i].children[1].innerHTML = `
                    <span>${days[i]}</span>
                    <p class="hours">${tiempo[i].timeMonthly.current}hrs</p>
                    <span class="last-data">Last ${currentLast} - ${lastTime[i].timeMonthly.previous}hrs</span>
           `
      }
  };
  export { inserHtmlDay, inserHtmlWeek, inserHtmlMonth }
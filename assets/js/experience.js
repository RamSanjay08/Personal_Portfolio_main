AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Frontend Developer Intern",
    cardImage: "assets/images/experience-page/3.jpg",
    place: "Elfinity Technologies",
    time: "Bengaluru, KA | Remote (DEC 2023 - PRESENT)",
    desp: "<li>Worked on developing an event-hosting web application with cutting-edge technologies.</li> <li>Familiarity in creating Custom UI Components, calendars, Authentication, State management tools, UI/UX Research and more.</li> <li>Tech stacks -<b> React</b>,<b> JavaScript</b>,<b> Tailwind</b>,<b> Bootstrap</b>,<b> Cloud Zero</b></li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


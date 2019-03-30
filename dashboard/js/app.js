/*jshint esversion: 6 */

// FYI: ES6 arrow functions - not IE11 compatible.
// Will transpile with Babel.js in future for learning purposes.

document.addEventListener("DOMContentLoaded", () => {
  //header, new-members & recent-activity: stored data
  const members = [
    {
      memberID: 0,
      firstName: "Mea",
      lastName: "Coding",
      img: "images/member-0.jpg",
      email: "",
      signupDate: "10/10/18"
    },
    {
      memberID: 1,
      firstName: "Dan",
      lastName: "Oliver",
      img: "images/member-4.jpg",
      email: "dan.oliver82@example.com",
      signupDate: "10/10/18"
    },
    {
      memberID: 2,
      firstName: "Dawn",
      lastName: "Wood",
      img: "images/member-3.jpg",
      email: "dawn.wood16@example.com",
      signupDate: "10/10/18"
    },
    {
      memberID: 3,
      firstName: "Dale",
      lastName: "Byrd",
      img: "images/member-2.jpg",
      email: "dale.byrd52@example.com",
      signupDate: "10/10/18"
    },
    {
      memberID: 4,
      firstName: "Victoria",
      lastName: "Chambers",
      img: "images/member-1.jpg",
      email: "victoria.chambers80@example.com",
      signupDate: "10/10/18"
    }
  ];

  const activity = [
    {
      entry: 1,
      memberID: 0,
      action: "posted",
      thing: "<a href='#'>Test Blog</a>",
      age: "99 hours ago"
    },
    {
      entry: 2,
      memberID: 1,
      action: "posted",
      thing: "<a href='#'>YourApp's SEO Tips</a>",
      age: "1 day ago"
    },
    {
      entry: 3,
      memberID: 2,
      action: "commented on",
      thing: "<a href='#'>Facebook's Changes for 2016</a>",
      age: "5 hours ago"
    },
    {
      entry: 4,
      memberID: 3,
      action: "liked the post",
      thing: "<a href='#'>Facebook's Changes for 2016</a>",
      age: "1 day ago"
    },
    {
      entry: 5,
      memberID: 4,
      action: "commented on",
      thing: "<a href='#'>YourApp's SEO Tips</a>",
      age: "4 hours ago"
    }
  ];

  //header: profile image
  const profileImg = document.querySelectorAll(".profile-img")[0];
  profileImg.style.background =
    "black url('" + members[0].img + "') center center / cover no-repeat";

  //header: profile name
  const profileName = document.querySelectorAll(".profile-name")[0];
  profileName.innerHTML = members[0].firstName + " " + members[0].lastName;

  //alert: hide alert message
  const alert = document.querySelectorAll(".alert")[0];
  const hide = document.getElementById("hide");
  hide.addEventListener("click", () => {
    alert.style.display = "none";
  });

  //new-members: last four new members activities in reverse order
  const lastFourNewMembers = members.slice(members.length - 4);
  lastFourNewMembers.reverse();

  //recent-activity: last four member activities in reverse order
  const lastFourOfActivity = activity.slice(activity.length - 4);
  lastFourOfActivity.reverse();

  //new-members & recent activity: pull data from arrays and display
  const iterateMultipleTimes = (num, runThis) => {
    for (let i = 0; i < num; i++) {
      runThis(i);
    }
  };

  const memberImg = i => {
    const className = ".member-img.member-" + i;
    const member = document.querySelectorAll(className);
    for (let j = 0; j < member.length; j++) {
      member[j].style.background =
        "black url('" +
        lastFourNewMembers[i].img +
        "') center center / cover no-repeat";
    }
  };

  const memberName = i => {
    const className = ".member-name.member-" + i;
    const member = document.querySelectorAll(className);
    for (let j = 0; j < member.length; j++) {
      const name =
        lastFourNewMembers[i].firstName + " " + lastFourNewMembers[i].lastName;
      member[j].textContent = name;
    }
  };

  const memberEmail = i => {
    const className = ".member-email.member-" + i;
    const member = document.querySelectorAll(className)[0];
    const email = lastFourNewMembers[i].email;
    member.textContent = email;
  };

  const memberDate = i => {
    const className = ".member-date.member-" + i;
    const member = document.querySelectorAll(className)[0];
    const date = members[i].signupDate;
    member.textContent = date;
  };

  const memberActivity = i => {
    const className = ".member-activity-" + i;
    const memberActivity = document.querySelectorAll(className);

    const memberLookup = members.find(
      person => person.memberID === lastFourOfActivity[i].memberID
    );

    memberActivity[0].style.background =
      "black url('" + memberLookup.img + "') center center / cover no-repeat";

    memberActivity[1].innerHTML =
      memberLookup.firstName +
      " " +
      memberLookup.lastName +
      " " +
      lastFourOfActivity[i].action +
      " " +
      lastFourOfActivity[i].thing;

    memberActivity[2].innerHTML = lastFourOfActivity[i].age;
  };

  iterateMultipleTimes(4, memberActivity);
  iterateMultipleTimes(4, memberImg);
  iterateMultipleTimes(4, memberName);
  iterateMultipleTimes(4, memberEmail);
  iterateMultipleTimes(4, memberDate);

  //message-user: search input - autocomplete
  let $names = [];

  let $members = e => {
    for (let i = 0; i < members.length; i++) {
      $names.push(members[i].firstName + " " + members[i].lastName);
    }
  };
  $members();
  $names.sort();

  for (let i = 0; i < $names.length; i++) {
    let option = document.createElement("option");
    option.value = $names[i];
    datalist.appendChild(option);
  }

  //message-user: "submit" message to user
  const sendMessageButton = document.getElementById("sendMessage");
  const searchNameInput = document.getElementById("searchName");
  const messageForUserInput = document.getElementById("messageForUser");

  sendMessageButton.addEventListener("click", e => {
    e.preventDefault();

    const sendMessage = () => {
      let searchInput = searchNameInput.value;
      let messageInput = messageForUserInput.value;
      console.log(typeof searchInput, searchInput);
      console.log(typeof messageInput, messageInput);

      if (searchInput === "" && messageInput === "") {
        window.alert("Please input user name and message.");
      } else if (searchInput === "") {
        window.alert("Please input user name.");
      } else if (messageInput === "") {
        window.alert("Please input message for user.");
      } else {
        window.alert("Your message has been sent to " + searchInput + "!");
      }
    };
    sendMessage();
  });

  //settings: see below
  const $form = document.getElementById("form-settings");
  const $switchEmail = document.getElementById("emailNotifications");
  const $switchProfile = document.getElementById("setProfileToPublic");
  const $select = document.getElementById("timezones");
  const $reset = document.getElementById("resetSettings");

  //control email switch
  $($switchEmail).click(function() {
    if ($(this).is(":checked") === true) {
      $(this)
        .attr("checked", true)
        .val("on");
    } else if ($(this).is(":checked") === false) {
      $(this)
        .attr("checked", false)
        .val("off");
    }
  });

  //control profile switch
  $($switchProfile).click(function() {
    if ($(this).is(":checked") === true) {
      $(this)
        .attr("checked", true)
        .val("on");
    } else if ($(this).is(":checked") === false) {
      $(this)
        .attr("checked", false)
        .val("off");
    }
  });

  //email - if localStorage contains property then display value
  if (localStorage.getItem("switchEmailLSValue")) {
    let storedValue = localStorage.getItem("switchEmailLSValue");
    if (storedValue === "on") {
      $($switchEmail)
        .attr("checked", true)
        .val("on");
    } else if (storedValue === "off") {
      $($switchEmail)
        .attr("checked", false)
        .val("off");
    }
  }

  //profile - if localStorage contains property then display value
  if (localStorage.getItem("switchProfileLSValue")) {
    let storedValue = localStorage.getItem("switchProfileLSValue");
    if (storedValue === "on") {
      $($switchProfile)
        .attr("checked", true)
        .val("on");
    } else if (storedValue === "off") {
      $($switchProfile)
        .attr("checked", false)
        .val("off");
    }
  }

  //timezones - if localStorage contains property then display value
  if (localStorage.getItem("timezoneLSValue")) {
    let storedValue = localStorage.getItem("timezoneLSValue");
    document.querySelector(
      'select [value="' + storedValue + '"]'
    ).selected = true;
  }

  //save settings to localStorage
  $($form).submit(e => {
    e.preventDefault();
    let switchEmailValue = $switchEmail.value;
    let switchProfileValue = $switchProfile.value;
    let timezoneValue = $select[$select.selectedIndex].value;
    localStorage.setItem("switchEmailLSValue", switchEmailValue);
    localStorage.setItem("timezoneLSValue", timezoneValue);
    localStorage.setItem("switchProfileLSValue", switchProfileValue);
  });

  //reset displayed settings and clear from localStorage
  $($reset).click(() => {
    localStorage.removeItem("switchEmailLSValue");
    localStorage.removeItem("timezoneLSValue");
    localStorage.removeItem("switchProfileLSValue");

    $($switchEmail)
      .prop("checked", true)
      .attr("checked", true)
      .val("on");

    $($switchProfile)
      .prop("checked", true)
      .attr("checked", true)
      .val("on");
    //.prop() alone won't add the checked property
    //.attr() alone won't refresh CSS on switch

    document.querySelector('select [value=""]').selected = true;
  });

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = e => {
    if (!e.target.matches("#dropbtn")) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
});

// Toggling the notifications menu
// Doesn't work inside main eventListener
function toggleDropdown() {
  document.getElementById("dropdown").classList.toggle("show");
}

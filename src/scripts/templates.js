import { showFormattedDate } from "./utils";

export function LoadingTemplate() {
  return `
  <div class="min-h-screen flex items-center justify-center">
    <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
        <circle class="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
        <circle class="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
        <circle class="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
        <circle class="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
    </svg>
  </div>
    `
}

export function ErrorMessageTemplate(message) {
  return `
     <div
      id="message"
      class="fixed z-10 md:max-w-fit  bg-red-800 text-red-200 rounded bottom-1  gap-5 left-1 right-1 text-sm py-3 pl-5 pr-2 flex justify-between items-center"
      >
      <div class="flex gap-2">
        <svg width="16" viewBox="0 0 16 16" fill="" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M7.493 0.015 C 7.442 0.021,7.268 0.039,7.107 0.055 C 5.234 0.242,3.347 1.208,2.071 2.634 C 0.660 4.211,-0.057 6.168,0.009 8.253 C 0.124 11.854,2.599 14.903,6.110 15.771 C 8.169 16.280,10.433 15.917,12.227 14.791 C 14.017 13.666,15.270 11.933,15.771 9.887 C 15.943 9.186,15.983 8.829,15.983 8.000 C 15.983 7.171,15.943 6.814,15.771 6.113 C 14.979 2.878,12.315 0.498,9.000 0.064 C 8.716 0.027,7.683 -0.006,7.493 0.015 M8.853 1.563 C 9.967 1.707,11.010 2.136,11.944 2.834 C 12.273 3.080,12.920 3.727,13.166 4.056 C 13.727 4.807,14.142 5.690,14.330 6.535 C 14.544 7.500,14.544 8.500,14.330 9.465 C 13.916 11.326,12.605 12.978,10.867 13.828 C 10.239 14.135,9.591 14.336,8.880 14.444 C 8.456 14.509,7.544 14.509,7.120 14.444 C 5.172 14.148,3.528 13.085,2.493 11.451 C 2.279 11.114,1.999 10.526,1.859 10.119 C 1.618 9.422,1.514 8.781,1.514 8.000 C 1.514 6.961,1.715 6.075,2.160 5.160 C 2.500 4.462,2.846 3.980,3.413 3.413 C 3.980 2.846,4.462 2.500,5.160 2.160 C 6.313 1.599,7.567 1.397,8.853 1.563 M7.706 4.290 C 7.482 4.363,7.355 4.491,7.293 4.705 C 7.257 4.827,7.253 5.106,7.259 6.816 C 7.267 8.786,7.267 8.787,7.325 8.896 C 7.398 9.033,7.538 9.157,7.671 9.204 C 7.803 9.250,8.197 9.250,8.329 9.204 C 8.462 9.157,8.602 9.033,8.675 8.896 C 8.733 8.787,8.733 8.786,8.741 6.816 C 8.749 4.664,8.749 4.662,8.596 4.481 C 8.472 4.333,8.339 4.284,8.040 4.276 C 7.893 4.272,7.743 4.278,7.706 4.290 M7.786 10.530 C 7.597 10.592,7.410 10.753,7.319 10.932 C 7.249 11.072,7.237 11.325,7.294 11.495 C 7.388 11.780,7.697 12.000,8.000 12.000 C 8.303 12.000,8.612 11.780,8.706 11.495 C 8.763 11.325,8.751 11.072,8.681 10.932 C 8.616 10.804,8.460 10.646,8.333 10.580 C 8.217 10.520,7.904 10.491,7.786 10.530 "
              stroke="none"
              fill-rule="evenodd"
              fill="#ffc9c9"
            ></path>
          </g>
        </svg>
        <p id="response-message">${message}</p>
      </div>

      <svg
        id="close-message"
        class="hover:bg-red-900"
        width="20"
        fill="#ffc9c9"
        viewBox="-3.04 -3.04 25.08 25.08"
        xmlns="http://www.w3.org/2000/svg"
        class="cf-icon-svg"
        stroke="#ffc9c9"
        transform="matrix(1, 0, 0, 1, 0, 0)"
        stroke-width="0.00019"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"
          ></path>
        </g>
      </svg>
    </div>
    `
}

export function SuccessMessageTemplate(message) {
  return `
    <div
      class="fixed z-10 md:max-w-[300px] bg-green-800 text-green-200 rounded bottom-1 left-1 right-1 text-sm py-3 pl-5 pr-2 flex justify-between items-center"
    >
      <div class="flex gap-2">
        <svg
          fill="#b9f8cf"
          width="16"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xml:space="preserve"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <g>
                  <path
                    d="M437.016,74.984c-99.979-99.979-262.075-99.979-362.033,0.002c-99.978,99.978-99.978,262.073,0.004,362.031 c99.954,99.978,262.05,99.978,362.029-0.002C536.995,337.059,536.995,174.964,437.016,74.984z M406.848,406.844 c-83.318,83.318-218.396,83.318-301.691,0.004c-83.318-83.299-83.318-218.377-0.002-301.693 c83.297-83.317,218.375-83.317,301.691,0S490.162,323.549,406.848,406.844z"
                  ></path>
                  <path
                    d="M368.911,155.586L234.663,289.834l-70.248-70.248c-8.331-8.331-21.839-8.331-30.17,0s-8.331,21.839,0,30.17 l85.333,85.333c8.331,8.331,21.839,8.331,30.17,0l149.333-149.333c8.331-8.331,8.331-21.839,0-30.17 S377.242,147.255,368.911,155.586z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <p id="response-message">${message}</p>
      </div>

      <svg
        width="20"
        fill="#b9f8cf"
        viewBox="-3.04 -3.04 25.08 25.08"
        xmlns="http://www.w3.org/2000/svg"
        class="cf-icon-svg"
        stroke="#b9f8cf"
        transform="matrix(1, 0, 0, 1, 0, 0)"
        stroke-width="0.00019"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"
          ></path>
        </g>
      </svg>
    </div>
 `;
}

export function generateStoryItemTemplate({
  id, name, description, photoUrl, createdAt, order
}) {
  return `

    <a href="/#/detailStory/${id}" id="first-main-content-item" tabindex="${order}" class="border cursor-pointer border-zinc-900 rounded overflow-hidden"
      data-bs-id="${id}">
      <div class="h-[250px] overflow-hidden brightness-[90%]">
        <img src="${photoUrl}" alt="storyImage" loading="lazy" class="w-full h-full object-cover hover:scale-105 duration-300 transition ease-in-out" />
      </div>

      <div class="flex flex-col p-3">
        <h1 class="line-clamp-2 text-zinc-200 xl:text-lg mt-3">${name}</h1>
        <div class="flex gap-1">
        <svg viewBox="0 0 24 24" fill="#71717b" width="16" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> <path d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          

          <p class="text-sm mt-1 line-clamp-1">${showFormattedDate(createdAt)}</p>
        </div>
        <p class="text-zinc-400 mt-1 line-clamp-[8]">
          ${description}
        </p>
      </div>
    </a>
    
    `;
}

export function generateSavedStoryItemTemplate({
  id, name, description, image, createdAt, order
}) {
  const imageUrl = URL.createObjectURL(image)
  return `
  <div class=" border-zinc-900 rounded border ">
    <a href="/#/saved/${id}" id="first-main-content-item" tabindex="${order}" class="cursor-pointer overflow-hidden"
      data-bs-id="${id}">
      <div class="h-[250px] overflow-hidden brightness-[90%]">
        <img src="${imageUrl}" alt="storyImage" loading="lazy" class="w-full h-full object-cover hover:scale-105 duration-300 transition ease-in-out" />
      </div>

      <div class="flex flex-col p-3">
        <h1 id="story-name" class="line-clamp-2 text-zinc-200 xl:text-lg mt-3">${name}</h1>
        <div class="flex gap-1">
        <svg viewBox="0 0 24 24" fill="#71717b" width="16" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> <path d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          

          <p class="text-sm mt-1 line-clamp-1">${showFormattedDate(createdAt)}</p>
        </div>
        <p class="text-zinc-400 mt-1 line-clamp-[8]">
          ${description}
        </p>
      </div>
    </a>
    <button id="delete-saved-story-btn" data-id="${id}" class="px-4 py-2 flex gap-2 text-white/75 bg-red-950 rounded active:bg-red-900 hover:bg-red-900 m-3">
    <span>Unsave</span>
  <svg viewBox="0 -0.5 21 21" width="16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete [#1487]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#d7d1d1"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"> </path> </g> </g> </g> </g></svg>  </div>
    `;
}

export function generateStoryDetailTemplate({
  id, name, photoUrl, description, createdAt, address
}) {
  return `
  <div class="stabilize-top pb-10 responsive">
   <div id="map-container" style="height: 400px" class="bg-zinc-600 w-full z-0"></div>

    <div data-id="${id}" id="detail-story-container" class="grid md:grid-cols-3 grid-cols-1 mt-5">

        <div class="overflow-hidden rounded col-span-1" style="height: 300px" >
            <img id="story-image" src="${photoUrl}" class="w-full h-full object-cover">
        </div>
        <ul class="flex flex-col gap-3 col-span-2 sm:px-5 sm:py-0 py-5">
            <h1 id="story-name" class="text-zinc-200 text-2xl">${name}</h1>
            <li><div class="flex gap-1">
                <svg viewBox="0 0 24 24"  fill="#71717b" width="16" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <path d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <p id="story-created-at" class="text-sm mt-1 line-clamp-1">Created at ${showFormattedDate(createdAt)}</p>
            </div></li>
            <li class="flex gap-1">
            <svg viewBox="0 0 192 192" fill="#71717b" width="16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#000000" stroke-width="12" d="M96 22a51.88 51.88 0 0 0-36.77 15.303A52.368 52.368 0 0 0 44 74.246c0 16.596 4.296 28.669 20.811 48.898a163.733 163.733 0 0 1 20.053 28.38C90.852 163.721 90.146 172 96 172c5.854 0 5.148-8.279 11.136-20.476a163.723 163.723 0 0 1 20.053-28.38C143.704 102.915 148 90.841 148 74.246a52.37 52.37 0 0 0-15.23-36.943A51.88 51.88 0 0 0 96 22Z"></path><circle cx="96" cy="74" r="20" stroke="#000000" stroke-width="12"></circle></g></svg>
            <span id="story-address" class="text-sm line-clamp-1">${address}</span>
            </li>
            <li >
              <p id="story-description">
                ${description}
                </p>
            </li>
        </ul>

        <div class="mt-5 ">
        <button id="save-story-btn" class="flex gap-2 primary-btn justify-between" style="max-width: 80px; width:100%;">
            <span>Save</span>
            <svg viewBox="0 0 16 16" width="16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0H2V16H4L8 12L12 16H14V0ZM7 3V5H5V7H7V9H9V7H11V5H9V3H7Z"
            fill="#000000"></path> </g></svg>
        </button>

        </div>
    </div>
    </div>
  `
}
export function generateSavedStoryDetailTemplate({
  id, name, image, description, createdAt, address
}) {
  return `
  <div class="stabilize-top pb-10">
   <div id="map-container" style="height: 400px" class="bg-zinc-600 w-full z-0"></div>

    <div data-id="${id}" id="detail-story-container" class="grid md:grid-cols-3 grid-cols-1 mt-5">

        <div class="overflow-hidden rounded col-span-1" style="height: 300px" >
            <img id="story-image" src="${URL.createObjectURL(image)}" class="w-full h-full object-cover">
        </div>
        <ul class="flex flex-col gap-3 col-span-2 sm:px-5 sm:py-0 py-5">
            <h1 id="story-name" class="text-zinc-200 text-2xl">${name}</h1>
            <li><div class="flex gap-1">
                <svg viewBox="0 0 24 24"  fill="#71717b" width="16" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <path d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <p id="story-created-at" class="text-sm mt-1 line-clamp-1">Created at ${showFormattedDate(createdAt)}</p>
            </div></li>
            <li class="flex gap-1">
            <svg viewBox="0 0 192 192" fill="#71717b" width="16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#000000" stroke-width="12" d="M96 22a51.88 51.88 0 0 0-36.77 15.303A52.368 52.368 0 0 0 44 74.246c0 16.596 4.296 28.669 20.811 48.898a163.733 163.733 0 0 1 20.053 28.38C90.852 163.721 90.146 172 96 172c5.854 0 5.148-8.279 11.136-20.476a163.723 163.723 0 0 1 20.053-28.38C143.704 102.915 148 90.841 148 74.246a52.37 52.37 0 0 0-15.23-36.943A51.88 51.88 0 0 0 96 22Z"></path><circle cx="96" cy="74" r="20" stroke="#000000" stroke-width="12"></circle></g></svg>
            <span id="story-address" class="text-sm line-clamp-1">${address}</span>
            </li>
            <li >
              <p id="story-description">
                ${description}
                </p>
            </li>
        </ul>

        <div class="mt-7">
        <button id="unsave-btn" data-id="${id}" class="px-4 py-2 flex gap-2 text-white/75 bg-red-950 rounded active:bg-red-900 hover:bg-red-900">
        <span>Unsave</span>
        <svg viewBox="0 -0.5 21 21" width="16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete [#1487]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#d7d1d1"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"> </path> </g> </g> </g> </g></svg>  </div>


        </div>
    </div>
  </div>
  `
}

export function emptyDataTemplate() {
  return `
  <h1 class="text-xl flex justify-center items-center min-h-screen">No data</h1>
  `
}

export function generateSubscribeButtonTemplate() {
  return `
   <button id="subscribe-button" class="primary-btn flex gap-3 items-center">
                <p>Subscribe</p>
                <svg
                  width="16"
                  version="1.0"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  xml:space="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path
                        fill="#231F20"
                        d="M56,44c-1.832,0-4-2.168-4-4V20C52,8.973,43.027,0,32,0S12,8.973,12,20v20c0,1.793-2.207,4-4,4 c-2.211,0-4,1.789-4,4s1.789,4,4,4h48c2.211,0,4-1.789,4-4S58.211,44,56,44z"
                      ></path>
                      <path fill="#231F20" d="M32,64c4.418,0,8-3.582,8-8H24C24,60.418,27.582,64,32,64z"></path>
                    </g>
                  </g>
                </svg>
              </button>
  `;
}

export function generateUnsubscribeButtonTemplate() {
  return `
    <button id="subscribe-button" class="primary-btn flex gap-3 items-center">
      <p>Unsubscribe</p>
      <svg width="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" 
      stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
       <path d="M16 16H13L9.75 12H1V10L3 8V5C3 4.60587 3.0456 4.22239 3.13182 3.85455L0 0H3L16 16Z" fill="#000000">
       </path> <path d="M13 8.61539L6.25443 0.313149C6.79787 0.11067 7.38601 0 8 0C10.7614 0 13 2.23858 13 5V8.61539Z" fill="#000000">
       </path> <path d="M7.99999 16C6.69378 16 5.58254 15.1652 5.1707 14H8.375L9.61633 15.5278C9.14984 15.8267 8.59515 16 7.99999 16Z" 
       fill="#000000"></path> </g>
       </svg>
    </button>
  `;
}
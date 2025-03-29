export default class Page404 {
    async render() {
        return `
        <div class="stabilize-top responsive flex justify-center lg:gap-20 sm:mt-20 mt-15">

        
            <div class="flex-col flex gap-2 ">
                <h1 class="text-2xl mt-5  text-zinc-300" id="first-main-content-item">404 - Page Not Found</h1>
                <p>There's nothing to see here</p>

                <div class="mt-4">
                    <a href="/#/"class="sm:py-3 sm:px-4 sm:text-base text-sm py-3 px-2 bg-white/25 text-zinc-200 hover:bg-white/50 rounded">Take me home</a>
                </div>
            </div>

            <img src="/images/404.png"  class="lg:w-[23rem] md:w-[15rem] w-[10rem]">
        </div>
        `
    }

    async afterRender() {

    }
}
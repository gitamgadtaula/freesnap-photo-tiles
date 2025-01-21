<template>
  <div>
    <nav
      class="navbar rounded-box shadow-2xl p-5 border-b-1 border-gray-200 h-16"
      style="border-bottom: 1px solid rgb(235, 231, 231)"
    >
      <div class="flex items-center md:gap-2">
        <p class="w-full text-xl font-semibold text-center uppercase">
          Freesnaps
        </p>
      </div>
    </nav>
    <section
      class="bg-white dark:bg-gray-900"
      style="height: calc(100vh - 4rem)"
    >
      <div
        class="flex flex-col items-center justify-center md:flex-row max-w-screen-xl px-4 py-8 mx-auto gap-2 md:gap-6 lg:py-16"
      >
        <div class="w-full md:w-1/2">
          <video
            class="sc-4d8tt6-2 kxufFT homepage-video"
            poster="https://d2pkj4iuzqk8im.cloudfront.net/videos/photo-books/c_scale,w_900--so_0--q_75--f_jpg--v1--assets--photoBooks--intro-main-desktop3.jpg"
            autoplay="true"
            preload="auto"
            loop="true"
            fetchpriority="high"
            style="object-fit: contain"
          >
            <source
              src="https://d2pkj4iuzqk8im.cloudfront.net/videos/photo-books/c_scale,w_650--q_auto:best--vc_h264:high:auto--v1--assets--photoBooks--intro-main-desktop3.mp4"
              type="video/mp4; codecs="
            />
          </video>
          <!-- <video class="shadow" controls="false" autoplay loop muted>
            <source src="/intro_video.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video> -->
        </div>
        <div class="w-full md:w-1/2 p-2 pr-0 md:pr-24 text-center md:text-left">
          <h1
            class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            Photo books <br />
            Made easy
          </h1>
          <p
            class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
            Design your book with just a few taps and see it come to life in 3D
          </p>
          <UButton size="xl" color="blue">Continue your book</UButton>
        </div>
      </div>
    </section>
    <section class="relative w-full" data-aos="fade-up">
      <video
        class="shadow object-cover h-[40rem] w-full"
        autoplay
        loop
        muted
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <source src="/intro_video.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        class="absolute inset-0 m-auto w-[30rem] flex flex-col text-white items-center justify-center"
      >
        <div class="bg-opacity-15 p-4 rounded-2xl">
          <h1
            class="font-extrabold tracking-tight text-xl leading-none md:text-3xl xl:text-4xl"
          >
            Beauty in every page
          </h1>
          <p class="font-light mt-2 md:text-lg">
            Every book comes with a hard, matte cover and is printed on premium
            pages with a silk finish
          </p>
        </div>
      </div>
    </section>
    <section
      class="bg-white flex flex-col items-center justify-center py-12 md:py-20 px-4 text-center"
      data-aos="fade-up"
      data-aos-duration="2500"
    >
      <img
        src="https://res.cloudinary.com/mixtiles/image/upload/v1704875546/assets/illustrations/Photo_Books/Meditation_1.svg"
        alt=""
        class="mt-2"
      />
      <h1 class="text-xl md:text-3xl font-bold mt-4">
        Same price, No matter how many pages
      </h1>
      <p class="mt-2 text-md md:text-lg font-light">
        Our pricing is honest, with no hidden fees, and shipping is always free.
      </p>
      <div class="flex gap-4 md:gap-12 mt-6 md:mt-10 text-lg mb-4">
        <div>
          <p class="font-bold">8"x8"</p>
          <span class="text-blue-600"> US$49 </span>
        </div>

        <UDivider label="" orientation="vertical" />
        <div>
          <p class="font-bold">10"x10"</p>
          <span class="text-blue-600"> US$79 </span>
        </div>

        <UDivider label="" orientation="vertical" />
        <div>
          <p class="font-bold">12"x12"</p>
          <span class="text-blue-600"> US$99 </span>
        </div>
      </div>
    </section>
    <section
      class="py-12 px-4 md:p-32 bg-[#fbf6f6] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-20"
      data-aos="fade-up"
      data-aos-duration="2500"
    >
      <div class="w-full md:w-[40%]">
        <h1 class="text-xl md:text-3xl font-bold mb-2">
          Frequently asked questions
        </h1>
        <UAccordion
          :items="faqItems"
          color="white"
          size="xl"
          class="w-full"
          variant="soft"
        >
          <template #item="{ item }">
            <p class="text-gray-900 px-4">
              {{ item.content }}
            </p>
          </template>
        </UAccordion>
      </div>

      <UDivider orientation="vertical"></UDivider>
      <div
        class="flex flex-col gap-4 md:gap-12 items-center justify-center text-center"
      >
        <div class="flex flex-col items-center gap-2">
          <img
            class="w-20 h-20"
            src="https://res.cloudinary.com/mixtiles/image/upload/v1708506319/assets/illustrations/Photo_Books/Shipping.png"
            alt=""
          />
          <p>Fast & Free shipping</p>
        </div>
        <div class="flex flex-col items-center gap-2">
          <img
            class="w-20 h-20"
            src="https://res.cloudinary.com/mixtiles/image/upload/v1708506263/assets/illustrations/Photo_Books/Support.png"
            alt=""
          />
          <p>Dedicated customer support</p>
        </div>
        <div class="flex flex-col items-center gap-2">
          <img
            class="w-20 h-20"
            src="https://res.cloudinary.com/mixtiles/image/upload/v1708504947/assets/illustrations/Photo_Books/Rated.png"
            alt=""
          />
          <p>Rated Excellent on trust pilot</p>
        </div>
      </div>
    </section>
    <footer
      class="py-12 px-4 md:p-32"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <div class="container px-4 md:px-6">
        <div
          class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <div class="space-y-4">
            <h3 class="text-lg font-medium">Products</h3>
            <nav class="flex flex-col space-y-3">
              <NuxtLink class="hover:text-primary font-thin">Gift Card</NuxtLink
              ><NuxtLink class="hover:text-primary">For Business</NuxtLink
              ><NuxtLink class="hover:text-primary">Frame Your Photos</NuxtLink
              ><NuxtLink class="hover:text-primary">Gallery Walls</NuxtLink>
            </nav>
          </div>
          <div class="space-y-4">
            <h3 class="text-lg font-medium">Follow Us</h3>
            <nav class="flex flex-col space-y-3">
              <NuxtLink class="hover:text-primary">Instagram</NuxtLink
              ><NuxtLink class="hover:text-primary">Facebook</NuxtLink
              ><NuxtLink class="hover:text-primary">Tiktok</NuxtLink
              ><NuxtLink class="hover:text-primary">Pinterest</NuxtLink
              ><NuxtLink class="hover:text-primary">Youtube</NuxtLink>
            </nav>
          </div>
          <div class="space-y-4">
            <h3 class="text-lg font-medium">Resources</h3>
            <nav class="flex flex-col space-y-3">
              <NuxtLink class="hover:text-primary"
                >Your Privacy Choices</NuxtLink
              ><NuxtLink class="hover:text-primary">Accessibility</NuxtLink
              ><NuxtLink class="hover:text-primary">Terms of Use</NuxtLink>
            </nav>
          </div>
          <div class="space-y-4">
            <h3 class="text-lg font-medium">Need Help?</h3>
            <div class="space-y-3">
              <p class="">Talk with our real support team,</p>
              <p class="">Every day 7am to midnight EST</p>
              <UButton color="blue" size="xl"> Chat With Us </UButton>
            </div>
          </div>
        </div>

        <div class="mt-8 text-center">
          <p class="font-thin text-sm">
            © 2025 Freesnaps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const faqItems = [
  {
    label: "What sizes do photo come in?",
    content:
      'Photo Books are available in three convenient sizes: 8" x 8" for $49, 10" x 10" for $79, and 12" x 12" for $99. Regardless of the number of photos you decide to include in your book, the price will remain the same! Each Photo Book requires a minimum of 25 photos and up to a maximum of 150 snapshots of your most treasured memories',
  },
  {
    label: "How can i customize my photo book?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "How long does it take to receive my photo book?",
    content:
      "You can expect your Photo Book to arrive approximately 10 business days after placing your order, but don’t worry – you’ll always see your estimated delivery date on the Checkout page before finalizing your order! Orders are delivered via UPS, and the best part? Shipping is absolutely free!",
  },
  {
    label: "What materials are used to create my photo book?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "I have received a damaged photo book, what should i do?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
  {
    label: "What countries do you ship to?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.",
  },
];
</script>

<style scoped>
div {
  font-family: "Poppins", sans-serif;
}
.kenburns-top {
  animation: kenburns-top 5s ease-out both;
}

@keyframes kenburns-top {
  0% {
    transform: scale(1) translateY(0);
    transform-origin: 50% 16%;
  }
  100% {
    transform: scale(1.25) translateY(-15px);
    transform-origin: top;
  }
}
</style>

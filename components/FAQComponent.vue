<template>
  <div class="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
    <div
      v-for="(question, index) in questions"
      :key="index"
      data-aos="fade"
      class="transition-all duration-100 bg-[#f1eded] cursor-pointer rounded-lg"
    >
      <button
        @click="toggleAnswer(index)"
        type="button"
        class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
      >
        <span class="flex text-sm text-left font-normal text-black">{{
          question.title
        }}</span>
        <svg
          :class="{ 'rotate-180': question.isOpen }"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 text-gray-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div v-if="question.isOpen" class="px-4 pb-5 sm:px-6 sm:pb-6">
        <p class="text-sm text-gray-700 font-light">{{ question.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const questions = ref([
  {
    title: "What sizes do Photo Books come in?",
    answer:
      'Photo Books are available in three convenient sizes: 8" x 8" for $49, 10" x 10" for $79, and 12" x 12" for $99. Regardless of the number of photos you decide to include in your book, the price will remain the same! Each Photo Book requires a minimum of 25 photos and up to a maximum of 150 snapshots of your most treasured memories',
    isOpen: false,
  },
  {
    title: "How can I customize my Photo Book?",
    answer:
      "Effortlessly! Our signature layout — featuring one photo per page — guarantees that every cherished memory receives its rightful spotlight. Personalize your Photo Book by handpicking the perfect photo for the front cover and truly make your book your own by customizing (or removing!) the text on the front. With just a click and drag, you can center your photos on each page or rearrange their order to tell your tale exactly as you envision it.",
    isOpen: false,
  },
  {
    title: "What kind of support do you provide?",
    answer:
      "Effortlessly! Our signature layout — featuring one photo per page — guarantees that every cherished memory receives its rightful spotlight. Personalize your Photo Book by handpicking the perfect photo for the front cover and truly make your book your own by customizing (or removing!) the text on the front. With just a click and drag, you can center your photos on each page or rearrange their order to tell your tale exactly as you envision it.",
    isOpen: false,
  },
  {
    title: "How long does it take to receive my Photo Book?",
    answer:
      "You can expect your Photo Book to arrive approximately 10 business days after placing your order, but don’t worry – you’ll always see your estimated delivery date on the Checkout page before finalizing your order! Orders are delivered via UPS, and the best part? Shipping is absolutely free!",
    isOpen: false,
  },
  {
    title: "How long does it take to receive my Photo Book?",
    answer:
      "You can expect your Photo Book to arrive approximately 10 business days after placing your order, but don’t worry – you’ll always see your estimated delivery date on the Checkout page before finalizing your order! Orders are delivered via UPS, and the best part? Shipping is absolutely free!",
    isOpen: false,
  },
  {
    title: "How long does it take to receive my Photo Book?",
    answer:
      "You can expect your Photo Book to arrive approximately 10 business days after placing your order, but don’t worry – you’ll always see your estimated delivery date on the Checkout page before finalizing your order! Orders are delivered via UPS, and the best part? Shipping is absolutely free!",
    isOpen: false,
  },
  {
    title: "How long does it take to receive my Photo Book?",
    answer:
      "You can expect your Photo Book to arrive approximately 10 business days after placing your order, but don’t worry – you’ll always see your estimated delivery date on the Checkout page before finalizing your order! Orders are delivered via UPS, and the best part? Shipping is absolutely free!",
    isOpen: false,
  },
]);

const toggleAnswer = (index) => {
  questions.value[index].isOpen = !questions.value[index].isOpen;
};
</script>

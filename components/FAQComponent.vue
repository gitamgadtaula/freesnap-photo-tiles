<template>
  <div class="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
    <div
      v-for="(question, index) in questions"
      :key="index"
      data-aos="fade"
      class="transition-all duration-200 bg-[#f1eded] cursor-pointer rounded-lg hover:bg-gray-50"
    >
      <button
        @click="toggleAnswer(index)"
        type="button"
        class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
      >
        <span class="flex text-sm font-normal text-black">{{
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
      <div
        v-if="question.isOpen"
        class="px-4 pb-5 sm:px-6 sm:pb-6"
        data-aos="fade"
        data-aos-duration="1500"
      >
        <p class="text-sm text-gray-700">{{ question.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const questions = ref([
  {
    title: "How can I get started?",
    answer:
      "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
    isOpen: false,
  },
  {
    title: "What is the pricing structure?",
    answer:
      "Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.",
    isOpen: false,
  },
  {
    title: "What kind of support do you provide?",
    answer:
      "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.",
    isOpen: false,
  },
  {
    title: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.",
    isOpen: false,
  },
]);

const toggleAnswer = (index) => {
  questions.value[index].isOpen = !questions.value[index].isOpen;
};
</script>

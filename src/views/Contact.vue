<template>
  <main class="page contact-page">
    <section class="page-intro contact-intro">
      <p class="subtitle">Open correspondence</p>
      <h1>Contact the Author</h1>
      <p>
        For kind words, questions, collaboration notes, or anything you would
        like to send through the archive.
      </p>
    </section>

    <section class="archive-card contact-card" aria-labelledby="contact-form-title">
      <div class="contact-copy">
        <p class="card-eyebrow">The Dragon Ledger</p>
        <h2 id="contact-form-title">Send a message</h2>
        <p>
          Messages sent here will arrive by email. You can also write directly
          if that feels easier.
        </p>
        <a class="contact-email" href="mailto:thedragonledger@gmail.com">
          thedragonledger@gmail.com
        </a>
      </div>

      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-field">
          <label for="contact-name">Name</label>
          <input
            id="contact-name"
            v-model="form.name"
            autocomplete="name"
            name="name"
            required
            type="text"
          />
        </div>

        <div class="form-field">
          <label for="contact-email">Email</label>
          <input
            id="contact-email"
            v-model="form.email"
            autocomplete="email"
            name="email"
            required
            type="email"
          />
        </div>

        <div class="form-field honeypot" aria-hidden="true">
          <label for="contact-company">Company</label>
          <input
            id="contact-company"
            v-model="form.company"
            autocomplete="off"
            name="company"
            tabindex="-1"
            type="text"
          />
        </div>

        <div class="form-field">
          <label for="contact-message">Message</label>
          <textarea
            id="contact-message"
            v-model="form.message"
            name="message"
            required
            rows="7"
          ></textarea>
        </div>

        <button class="contact-submit" :disabled="isSending" type="submit">
          {{ isSending ? "Sending..." : "Send message" }}
        </button>

        <p v-if="statusMessage" class="form-status" role="status">
          {{ statusMessage }}
        </p>
      </form>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref } from "vue";

const contactEndpoint = "https://api.web3forms.com/submit";
const web3FormsAccessKey = "66aac2b5-4e0d-4c2d-8fcc-4123d8013dd0";

const form = reactive({
  name: "",
  email: "",
  message: "",
  company: "",
});

const isSending = ref(false);
const statusMessage = ref("");

const resetForm = () => {
  form.name = "";
  form.email = "";
  form.message = "";
  form.company = "";
};

const handleSubmit = async () => {
  if (form.company) {
    resetForm();
    return;
  }

  isSending.value = true;
  statusMessage.value = "";

  try {
    const payload = new FormData();
    payload.append("access_key", web3FormsAccessKey);
    payload.append("subject", "New message from The Dragon Ledger");
    payload.append("from_name", "The Dragon Ledger contact form");
    payload.append("name", form.name);
    payload.append("email", form.email);
    payload.append("message", form.message);

    const response = await fetch(contactEndpoint, {
      method: "POST",
      body: payload,
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error("The message could not be sent.");
    }

    resetForm();
    statusMessage.value = "Thank you. Your message has been sent.";
  } catch {
    statusMessage.value =
      "The form had trouble sending. You can still email the author directly.";
  } finally {
    isSending.value = false;
  }
};
</script>

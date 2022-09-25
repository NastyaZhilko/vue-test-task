<template>
  <div class="contact-us-container">
    <common-dialog v-model:isShow="dialogIsVisible">
      <p class="dialog-message">Data sent successfully!</p>
    </common-dialog>
    <PageTitle :title="title"/>
    <form @submit.prevent="submitForm">
      <div class="inputs">
        <div :class="{ error: v$.formData.firstName.$errors.length }">
          <common-input
              v-model="v$.formData.firstName.$model"
              label="First Name *"
              placeholder="Enter your First name"
          />
          <div v-for="(error, index) of v$.formData.firstName.$errors" :key="index">
            {{ error.$message }}
          </div>
        </div>
        <div :class="{ error: v$.formData.lastName.$errors.length }">
          <common-input
              v-model="v$.formData.lastName.$model"
              label="Last Name *"
              placeholder="Enter your Last name"
          />
          <div v-for="(error, index) of v$.formData.lastName.$errors" :key="index">
            {{ error.$message }}
          </div>
        </div>
        <div :class="{ error: v$.formData.company.$errors.length }">
          <common-input
              v-model="v$.formData.company.$model"
              label="Company *"
              placeholder="Enter Your Company"
          />
          <div v-for="(error, index) of v$.formData.company.$errors" :key="index">
            {{ error.$message }}
          </div>
        </div>
        <div class="form-group" :class="{ error: v$.formData.email.$errors.length }">
          <common-input
              v-model="v$.formData.email.$model"
              label="Email *"
              placeholder="Enter Your Email"
          />
          <div v-for="(error, index) of v$.formData.email.$errors" :key="index">
            {{ error.$message }}
          </div>
        </div>

        <div class="form-group" :class="{ error: v$.formData.jobTitle.$errors.length }">
          <common-input
              v-model="v$.formData.jobTitle.$model"
              label="Job Title *"
              placeholder="Enter Job Title"
          />
          <div class="input-errors" v-for="(error, index) of v$.formData.jobTitle.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>
        <div class="form-group" :class="{ error: v$.formData.country.$errors.length }">
          <common-input
              v-model="v$.formData.country.$model"
              label="Country *"
              placeholder="Enter Your Country"
          />
          <div class="input-errors" v-for="(error, index) of v$.formData.country.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>
        <div class="form-group" :class="{ error: v$.formData.state.$errors.length }">
          <common-input
              v-model="v$.formData.state.$model"
              label="State *"
              placeholder="Enter Your State"
          />
          <div class="input-errors" v-for="(error, index) of v$.formData.state.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>
        <div class="form-group" :class="{ error: v$.formData.zipCode.$errors.length }">
          <common-input
              v-model="v$.formData.zipCode.$model"
              label="Zip code *"
              placeholder="Enter Your Zip Code"
          />
          <div v-for="(error, index) of v$.formData.zipCode.$errors" :key="index">
            {{ error.$message }}
          </div>
        </div>

      </div>
      <common-button
          @click="submitForm"
          type="submit"
          class="button"
          :disabled="v$.formData.$invalid">
        Submit
      </common-button>
    </form>
  </div>
</template>
<script>
import PageTitle from '@/components/shared/PageTitle.vue'
import useVuelidate from '@vuelidate/core'
import {required, email, minLength} from '@vuelidate/validators'
import validName from '@/utils/validators.js'
import CommonInput from "@/components/shared/UI/CommonInput";

export default {
  components: {CommonInput, PageTitle},
  data() {
    return {
      title: 'Contact us',
      dialogIsVisible: false,
      formData: {
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        zipCode: '',
        jobTitle: '',
        country: '',
        state: '',
      }
    }
  },
  setup() {
    return {v$: useVuelidate()}
  },
  validations() {
    return {
      formData: {
        firstName: {
          required, name_validation: {
            $validator: validName,
            $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
          }
        },
        lastName: {
          required, name_validation: {
            $validator: validName,
            $message: 'Invalid Name. Valid name only contain letters, dashes (-) and spaces'
          }
        },
        company: {
          required,
        },
        email: {
          required, email
        },
        zipCode: {
          required,
        },
        jobTitle: {
          required,
        },
        country: {
          required,
        },
        state: {
          required,
        },
      },
    }
  },
  methods: {
    submitForm() {
      this.dialogIsVisible = true
      setTimeout(() => {
        this.dialogIsVisible = false
      }, 3000)
    }
  }
}
</script>

<style scoped>

.contact-us-container {
  margin: 0;
  padding: 45px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dialog-message {
  text-align: center;
  margin: 0
}

.inputs {
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  margin: 45px 0 35px;
}

.button {
  display: block;
  margin: 0 auto
}

.error {
  color: red
}

</style>

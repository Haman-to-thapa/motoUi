import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phone: string;
  timeFrame: string;
  size: string;
  quantity: number;
  description: string;
}

const Eight = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <section className="mt-20 w-full flex justify-center py-12 sm:py-16 lg:py-20 bg-white text-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1200px] mx-auto">
        <h1 className="text-center uppercase font-bold font-['Roboto_Condensed'] text-2xl sm:text-3xl lg:text-[42px] leading-tight tracking-[-0.02em]">
          Request a quote
        </h1>

        <div className="mt-6 sm:mt-8 w-full max-w-[1108px] mx-auto bg-white rounded-[6px] shadow-sm p-4 sm:p-6 lg:p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div>
                <label className="font-medium text-sm">Name*</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: { value: 2, message: "Name must be at least 2 characters" }
                  })}
                  className="w-full h-10 sm:h-12 lg:h-[46px] mt-1 sm:mt-2 border border-gray-300 rounded-[6px] px-3 focus:outline-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="font-medium text-sm">Email*</label>
                <input
                  type="email"
                  placeholder="example@domain.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full h-10 sm:h-12 lg:h-[46px] mt-1 sm:mt-2 border border-gray-300 rounded-[6px] px-3 focus:outline-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="font-medium text-sm">Phone No*</label>
                <input
                  type="tel"
                  placeholder="Your phone number"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9+\-\s()]{10,}$/,
                      message: "Invalid phone number"
                    }
                  })}
                  className="w-full h-10 sm:h-12 lg:h-[46px] mt-1 sm:mt-2 border border-gray-300 rounded-[6px] px-3 focus:outline-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="font-medium text-sm">Time Frame*</label>
                <input
                  type="text"
                  placeholder="e.g. 1–3 weeks"
                  {...register("timeFrame", { required: "Time frame is required" })}
                  className="w-full h-10 sm:h-12 lg:h-[46px] mt-1 sm:mt-2 border border-gray-300 rounded-[6px] px-3 focus:outline-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                />
                {errors.timeFrame && <p className="text-red-500 text-sm mt-1">{errors.timeFrame.message}</p>}
              </div>

              <div>
                <label className="font-medium text-sm">Size*</label>
                <input
                  type="text"
                  placeholder="Project size or dimensions"
                  {...register("size", { required: "Size is required" })}
                  className="w-full h-10 sm:h-12 lg:h-[46px] mt-1 sm:mt-2 border border-gray-300 rounded-[6px] px-3 focus:outline-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                />
                {errors.size && <p className="text-red-500 text-sm mt-1">{errors.size.message}</p>}
              </div>

              <div>
                <label className="font-medium text-sm">Quantity*</label>
                <input
                  type="number"
                  placeholder="Number of items"
                  {...register("quantity", {
                    required: "Quantity is required",
                    min: { value: 1, message: "Quantity must be at least 1" },
                    valueAsNumber: true
                  })}
                  className="w-full h-10 sm:h-12 lg:h-[46px] mt-1 sm:mt-2 border border-gray-300 rounded-[6px] px-3 focus:outline-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
                />
                {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>}
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <label className="font-medium text-sm">
                Please Describe Your Project*
              </label>
              <textarea
                placeholder="Provide all important details so we can quote accurately..."
                {...register("description", {
                  required: "Project description is required",
                  minLength: { value: 10, message: "Description must be at least 10 characters" }
                })}
                className="mt-1 sm:mt-2 w-full h-32 sm:h-40 lg:h-[229px] border border-gray-300 rounded-[6px] p-3 resize-none focus:outline-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors"
              ></textarea>
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
            </div>

            <div className="mt-6 sm:mt-8 flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-[6px] font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit Quote Request
              </button>
            </div>
          </form>
        </div>

        <div className="mt-4 max-w-[1108px] mx-auto text-sm text-gray-600 flex justify-center text-center">
          <p>
            By submitting this form you agree to our <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Eight;
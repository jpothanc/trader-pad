import { zodResolver } from "@hookform/resolvers/zod";
import { resolve } from "path";
import {
  useForm,
  useController,
  Controller,
  type FieldValues,
} from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import Select from "react-select";
const orderCreationSchema = z.object({
  product: z.string().min(4, "Product must be min 4 characters long"),
  size: z.number().int(),
  price: z.string(),
  acronym: z.string(),
  account: z.string(),
  entity: z.string(),
});
// .refine((data) => data.size > 5000, {
//   message: "Size cannot be greater than 5000",
//   path: ["size"],
// });
type TorderCreationSchema = z.infer<typeof orderCreationSchema>;
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const OrderEntry = () => {
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    // reset,
    // getValues,
  } = useForm<TorderCreationSchema>({
    resolver: zodResolver(orderCreationSchema),
  });
  const handleChange = (selectedOption: any) => {
    // Handle the selected option here
    console.log(`Option selected: ${selectedOption.label}`);
  };

  const OnSubmit = async (data: TorderCreationSchema) => {
    const response = await fetch("https://localhost:7213/api/Order/create", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // debugger;
    const responseData = await response.text();

    if (response.ok) {
      setStatus(responseData);
    }
    // if (responseData.errors) {
    //   alert("Order Creation Failed." + responseData.errors);
    // }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    //reset();
  };

  return (
    <>
      <header>
        <div className="oe-container">
          <header className="oe-header">Order Entry</header>
        </div>
        <br></br>
        <form onSubmit={handleSubmit(OnSubmit)}>
          <div className="oe-container">
            <input
              className="oe-input"
              {...register("product", {
                required: true,
              })}
              type="text"
              id="product"
              placeholder="product"
              name="product"
            />
            <br></br>
            <input
              className="oe-input"
              {...register("size", {
                valueAsNumber: true,
              })}
              type="number"
              id="size"
              placeholder="size"
              name="size"
            />
            {errors.size && <p>{`${errors.size.message}`}</p>}
            <br></br>
            <input
              className="oe-input"
              {...register("price")}
              type="text"
              id="price"
              placeholder="price"
              name="price"
            />
            <br></br>
            <input
              className="oe-input"
              {...register("acronym")}
              type="text"
              id="acronym"
              placeholder="acronym"
              name="acronym"
            />
            <br></br>
            <input
              className="oe-input"
              {...register("account")}
              type="text"
              id="account"
              placeholder="account"
              name="account"
            />
            <br></br>
            <input
              className="oe-input"
              {...register("entity")}
              type="text"
              id="entity"
              placeholder="entity"
              name="entity"
            />
            <br></br>
            <div>
              {/* <Controller
              name="selectField"
              control={control}
              defaultValue={""}
              render={({ field }) => <Select {...field} options={options} />}
            /> */}
            </div>
            <button className="btn">Create</button>
            <div>{status}</div>
          </div>
        </form>
      </header>
    </>
  );
};

export default OrderEntry;
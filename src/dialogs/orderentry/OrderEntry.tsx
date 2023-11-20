import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ForwardedRef, forwardRef, useState } from "react";
import { getOrderCreationApi, post } from "../../utils/restHelper";
import config from "../../config/config.json";

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
interface ChildProps {
  // Define your props here
}

const OrderEntry = forwardRef(
  (props: ChildProps, ref: ForwardedRef<HTMLFormElement>) => {
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
      const responseData = await post(getOrderCreationApi(), data);
      setStatus(await responseData.text());
      await new Promise((resolve) => setTimeout(resolve, 1000));
      //reset();
    };

    return (
      <>
        <div className="oe-container">
          <form ref={ref} onSubmit={handleSubmit(OnSubmit)}>
            <div className="oe-input-container">
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
            </div>
            <div className="oe-input-container">
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
            </div>

            <div className="oe-input-container">
              <input
                className="oe-input"
                {...register("price")}
                type="text"
                id="price"
                placeholder="price"
                name="price"
              />
            </div>
            <div className="oe-input-container">
              <input
                className="oe-input"
                {...register("acronym")}
                type="text"
                id="acronym"
                placeholder="acronym"
                name="acronym"
              />
            </div>
            <div className="oe-input-container">
              <input
                className="oe-input"
                {...register("account")}
                type="text"
                id="account"
                placeholder="account"
                name="account"
              />
            </div>
            <div className="oe-input-container">
              <input
                className="oe-input"
                {...register("entity")}
                type="text"
                id="entity"
                placeholder="entity"
                name="entity"
              />
            </div>
            <div>
              {/* <Controller
              name="selectField"
              control={control}
              defaultValue={""}
              render={({ field }) => <Select {...field} options={options} />}
            /> */}
            </div>

            <div className="oe-input-container__submit">
              <button className="toolbar-btn">Create</button>
            </div>
            {(status != "" || errors.size) && (
              <div style={{ paddingTop: "10px" }}>
                {status != "" && <p className="status-bar">{`${status}`}</p>}
                {errors.size && (
                  <p className="status-bar__error">{`${errors.size.message}`}</p>
                )}
              </div>
            )}
          </form>
        </div>
      </>
    );
  }
);

export default OrderEntry;

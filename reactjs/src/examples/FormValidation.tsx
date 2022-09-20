import { Button, Form } from "react-bootstrap";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

interface InputData {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
}

export const FormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputData>();

  const onSucess: SubmitHandler<InputData> = (data) => console.log(data);
  const onError: SubmitErrorHandler<InputData> = (data) => console.log(data);

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        maxWidth: "480px",
      }}
      onSubmit={handleSubmit(onSucess, onError)}
    >
      <div>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First name"
          {...register("firstName", {
            required: "First name is required!",
            maxLength: {
              value: 20,
              message: "First name must be less than 20 characters!",
            },
          })}
        />
        <span style={{ color: "red" }}>{errors.firstName?.message}</span>
      </div>
      <div>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last name"
          {...register("lastName", {
            required: "Last name is required!",
            maxLength: {
              value: 20,
              message: "Last name must be less than 20 characters!",
            },
          })}
        />
        <span style={{ color: "red" }}>{errors.lastName?.message}</span>
      </div>
      <div>
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Age"
          {...register("age", {
            required: "Age is required!",
            maxLength: {
              value: 2,
              message: "Age must be less than 2 characters!",
            },
          })}
        />
        <span style={{ color: "red" }}>{errors.age?.message}</span>
      </div>
      <div>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required!" })}
        />
        <span style={{ color: "red" }}>{errors.email?.message}</span>
      </div>
      <div>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required!",
          })}
        />
        <span style={{ color: "red" }}>{errors.password?.message}</span>
      </div>
      <div>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword", {
            required: "You should confirm your password!",
          })}
        />
        <span style={{ color: "red" }}>{errors.confirmPassword?.message}</span>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

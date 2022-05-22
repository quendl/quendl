import { NextPage } from "next";
import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();

  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler = async (data: object) => {
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status_code === " SUCCESS") {
          localStorage.setItem("userData", JSON.stringify(data.data));
          router.push("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box
        component={"div"}
        sx={{
          background: "#2F2F2F",
          height: { xs: "100vh", sm: "100vh", md: "100vh", lg: "100vh" },
          paddingY: { xs: "2rem", sm: "2rem", md: "2rem", lg: "2rem" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component={"div"}
          sx={{
            width: { xs: "20rem", sm: "30rem", md: "35rem", lg: "35rem" },
            borderRadius: "0.5rem",
            backgroundColor: "#000000",
            padding: "2rem",
          }}
        >
          <Typography
            sx={{
              marginBottom: "2rem",
              marginTop: "1rem",
              color: "#ffffff",
              fontSize: "3rem",
            }}
            align={"center"}
          >
            Login with
          </Typography>
          <Typography
            sx={{ marginBottom: "2rem", color: "#ffffff", fontSize: "1.5rem" }}
            align={"center"}
          >
            your Quendl Account
          </Typography>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Box component={"div"} sx={{ marginY: "1rem" }}>
              <Typography variant={"subtitle1"} color={"white"} gutterBottom>
                Email
              </Typography>
              <Controller
                control={control}
                // @ts-ignore
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant={"standard"}
                    fullWidth
                    focused={true}
                    sx={{ input: { color: "white" } }}
                    type={"email"}
                    placeholder={"email"}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email?.message : ""}
                  />
                )}
                name={"email"}
              />
            </Box>
            <Box component={"div"} sx={{ marginY: "1rem" }}>
              <Typography variant={"subtitle1"} color={"white"} gutterBottom>
                Password
              </Typography>
              <Controller
                control={control}
                // @ts-ignore
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant={"standard"}
                    fullWidth
                    focused={true}
                    sx={{ input: { color: "white" } }}
                    type={"password"}
                    placeholder={"password"}
                    error={!!errors.password}
                    helperText={errors.password ? errors.password?.message : ""}
                  />
                )}
                name={"password"}
              />
            </Box>
            <Box
              component={"div"}
              sx={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              <Button
                sx={{
                  textTransform: "uppercase",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
                type={"submit"}
                fullWidth
                variant={"contained"}
              >
                log in
              </Button>
            </Box>
          </form>
          <Link href={"/register"}>
            <Typography
              color={"white"}
              sx={{
                width: "100%",
                fontWeight: "bold",
                color: "#868783",
                cursor: "pointer",
                textDecoration: "underline",
                marginBottom: "1rem",
              }}
              align={"center"}
            >
              Not a member yet ?
            </Typography>
          </Link>
          <Link href={"#"}>
            <Typography
              color={"white"}
              sx={{ width: "100%", fontWeight: "bold", color: "#868783" }}
              align={"center"}
            >
              Forgot your password ?
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Login;

import * as Yup from "yup";

export const validationSchema = Yup.object({
  title: Yup.string()
    .max(100, "Tytuł jest zbyt długi")
    .required("Tytuł jest wymagany"),
  img: Yup.string().required("Zdjęcie też jest potrzebne"),
});

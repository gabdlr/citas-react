import App from "../App";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
const mockNewDate = {
  pacientNameInput: "Test name",
  pacientOwnerNameInput: "Test owner",
  pacientEmailInput: "test@email.com",
  signUpDateInput: "2024-01-13",
  pacientSymptomsInput: "Test symptoms",
};

const addPatient = async () => {
  const pacientNameInput = (await screen.findByTestId(
    "pacientNameInput"
  )) as HTMLInputElement;
  fireEvent.change(pacientNameInput, {
    target: { value: mockNewDate.pacientNameInput },
  });

  const pacientOwnerNameInput = (await screen.findByTestId(
    "pacientOwnerNameInput"
  )) as HTMLInputElement;
  fireEvent.change(pacientOwnerNameInput, {
    target: { value: mockNewDate.pacientOwnerNameInput },
  });

  const pacientEmailInput = (await screen.findByTestId(
    "pacientEmailInput"
  )) as HTMLInputElement;
  fireEvent.change(pacientEmailInput, {
    target: { value: mockNewDate.pacientEmailInput },
  });

  const signUpDateInput = (await screen.findByTestId(
    "signUpDateInput"
  )) as HTMLInputElement;
  fireEvent.change(signUpDateInput, {
    target: { value: mockNewDate.signUpDateInput },
  });

  const pacientSymptomsInput = (await screen.findByTestId(
    "pacientSymptomsInput"
  )) as HTMLInputElement;
  fireEvent.change(pacientSymptomsInput, {
    target: { value: mockNewDate.pacientSymptomsInput },
  });

  const submitButton = await screen.findByTestId("submitButtonId");
  fireEvent.click(submitButton);
};

test("should add a new patient date", async () => {
  const PATIENT_LIST_WITH_PATIENTS = "Listado pacientes";
  render(<App />);
  await addPatient();
  expect(
    await screen.findByText(PATIENT_LIST_WITH_PATIENTS)
  ).toBeInTheDocument();
});

test("should edit a patient date", async () => {
  const NEW_PATIENT_NAME = "test new name";
  render(<App />);
  await addPatient();
  await addPatient();
  const editButton = (
    await screen.findAllByTestId("pacientCardEditButton")
  )[0] as HTMLButtonElement;
  fireEvent.click(editButton);
  const pacientNameInput = (await screen.findByTestId(
    "pacientNameInput"
  )) as HTMLInputElement;
  fireEvent.change(pacientNameInput, {
    target: { value: NEW_PATIENT_NAME },
  });
  const submitButton = await screen.findByTestId("submitButtonId");
  fireEvent.click(submitButton);
  const pacientNameCardField = (
    await screen.findAllByTestId("pacientCardField")
  )[0] as HTMLParagraphElement;
  expect(pacientNameCardField.querySelector("span")).toHaveTextContent(
    NEW_PATIENT_NAME
  );
});

test("should remove a patient date", async () => {
  const PATIENT_LIST_WITHOUT_PATIENTS = "No hay pacientes";
  render(<App />);
  await addPatient();
  const deleteButton = (await screen.findByTestId(
    "pacientCardDeleteButton"
  )) as HTMLButtonElement;
  fireEvent.click(deleteButton);
  expect(
    await screen.findByText(PATIENT_LIST_WITHOUT_PATIENTS)
  ).toBeInTheDocument();
});

test("should clear form if a patient is currently on edition and it is deleted", async () => {
  render(<App />);
  await addPatient();
  const editButton = (await screen.findByTestId(
    "pacientCardEditButton"
  )) as HTMLButtonElement;
  fireEvent.click(editButton);
  const deleteButton = (await screen.findByTestId(
    "pacientCardDeleteButton"
  )) as HTMLButtonElement;
  fireEvent.click(deleteButton);
  const pacientNameInput = (await screen.findByTestId(
    "pacientNameInput"
  )) as HTMLInputElement;
  expect(pacientNameInput.value).toBe("");
});

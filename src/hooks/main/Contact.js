"use client";

import { useEffect, useState } from "react";
import useRoutesHook from "../Routes";

export default function useContactHook() {
  const business = {
    name: "La Buena Mesa",
    tagline: "Cocina tradicional",
    address: "Av. San Martín 456, Centro",
    phone: "+54 9 11 4567-8901",
    email: "hola@labuenamesa.com.ar",
    hours: "Martes a domingo · 12:00 a 15:00 y 20:00 a 00:00",
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Reserva de mesa",
    date: "",
    guests: "2 personas",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const { contactPath, homePath, menuPath } = useRoutesHook();

  const inputClass =
    "w-full border border-[#d2c2a7] bg-[#f0e7d7] px-4 py-3.5 text-sm text-[#33251a] outline-none transition placeholder:text-[#a99a84] focus:border-[#a17b3e] focus:ring-1 focus:ring-[#b99551]/30";

  const [modalOpen, setModalOpen] = useState(false);

  const openTestModal = (e) => {
    e?.preventDefault();
    setModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    handleSubmit(e);
    setModalOpen(true);
  };

  const isReservation = form.subject === "Reserva de mesa";
  const isEvent = form.subject === "Eventos y celebraciones";
  const phoneRequired = isReservation || isEvent;

  const contactItemClass =
    "mt-2 block cursor-pointer text-sm text-[#e8decc] transition hover:text-[#dfbd72]";

  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/Argentina/Buenos_Aires",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).formatToParts(new Date());

    const year = parts.find((part) => part.type === "year").value;
    const month = parts.find((part) => part.type === "month").value;
    const day = parts.find((part) => part.type === "day").value;

    setMinDate(`${year}-${month}-${day}`);
  }, []);

  return {
    business,
    form,
    setForm,
    sent,
    setSent,
    handleChange,
    handleSubmit,
    contactPath,
    homePath,
    menuPath,
    inputClass,
    modalOpen,
    setModalOpen,
    openTestModal,
    handleFormSubmit,
    isReservation,
    isEvent,
    phoneRequired,
    contactItemClass,
    minDate,
    setMinDate,
  };
}

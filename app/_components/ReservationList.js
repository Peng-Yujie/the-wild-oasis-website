"use client";

import ReservationCard from "@/app/_components/ReservationCard";
import { deleteReservation } from "@/app/_lib/actions";
import { useOptimistic } from "react";

export default function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (currentBookings, bookingId) => {
      return currentBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  const handleDelete = async (bookingId) => {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  };

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          key={booking.id}
          booking={booking}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

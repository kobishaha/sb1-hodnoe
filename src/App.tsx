import React, { useState } from 'react'
import Calendar from './components/Calendar'
import AppointmentForm from './components/AppointmentForm'
import AppointmentList from './components/AppointmentList'
import { Appointment } from './types'

function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [appointments, setAppointments] = useState<Appointment[]>([])

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
  }

  const handleAddAppointment = (appointment: Appointment) => {
    setAppointments([...appointments, appointment])
    setSelectedDate(null)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">Appointment Booking Calendar</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <Calendar onSelectDate={handleDateSelect} appointments={appointments} />
        <div className="flex flex-col gap-4">
          {selectedDate && (
            <AppointmentForm
              selectedDate={selectedDate}
              onAddAppointment={handleAddAppointment}
            />
          )}
          <AppointmentList appointments={appointments} />
        </div>
      </div>
    </div>
  )
}

export default App
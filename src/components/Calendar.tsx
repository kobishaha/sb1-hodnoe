import React from 'react'
import { Calendar as CalendarIcon } from 'lucide-react'
import { Appointment } from '../types'

interface CalendarProps {
  onSelectDate: (date: Date) => void
  appointments: Appointment[]
}

const Calendar: React.FC<CalendarProps> = ({ onSelectDate, appointments }) => {
  const currentDate = new Date()
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()

  const renderCalendarDays = () => {
    const days = []
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i)
      const hasAppointment = appointments.some(
        (apt) => apt.date.toDateString() === date.toDateString()
      )

      days.push(
        <button
          key={i}
          onClick={() => onSelectDate(date)}
          className={`p-2 m-1 rounded-full ${
            hasAppointment
              ? 'bg-blue-500 text-white'
              : 'bg-white hover:bg-gray-200'
          }`}
        >
          {i}
        </button>
      )
    }
    return days
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <CalendarIcon className="w-6 h-6 text-gray-500" />
      </div>
      <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
    </div>
  )
}

export default Calendar
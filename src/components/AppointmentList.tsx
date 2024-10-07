import React from 'react'
import { Appointment } from '../types'

interface AppointmentListProps {
  appointments: Appointment[]
}

const AppointmentList: React.FC<AppointmentListProps> = ({ appointments }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Upcoming Appointments</h3>
      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments scheduled.</p>
      ) : (
        <ul className="space-y-2">
          {appointments.map((appointment) => (
            <li key={appointment.id} className="border-b pb-2">
              <p className="font-medium">{appointment.name}</p>
              <p className="text-sm text-gray-600">
                {appointment.date.toLocaleString('en-US', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AppointmentList
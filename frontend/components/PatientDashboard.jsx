import { useState, useEffect } from "react";
import Link from "next/link";
export default function PatientDashboard() {
  const [connected, SetConnected] = useState(false);
  return (
    <div>
      <main class="flex-col">
        <h2 class="text-white font-bold text-4xl">Patient Dashboard</h2>

        <div class="flex gap-x-5">
          <card>
            <div class="relative px-1 mt-10  ">
              <div class="bg-white p-6 px-8 rounded-lg shadow-lg">
                <div class="flex items-baseline">
                  <span class="p-1 bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    Available
                  </span>
                </div>
                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  Book Appointment
                </h4>
                <div class="mt-1">Request to see a doctor</div>
                <div class="mt-4">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white  text-md font-semibold py-2 px-4 rounded">
                    <Link href="/book-appointment">Book Appointment</Link>
                  </button>
                </div>
              </div>
            </div>
          </card>

          <card>
            <div class="relative px-1 mt-10  ">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="flex items-baseline">
                  <span class="p-1 bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    New
                  </span>
                </div>
                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  My Appointments
                </h4>
                <div class="mt-1">View Appointment's history</div>
                <div class="mt-4">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white  text-md font-semibold py-2 px-4 rounded">
                    <Link href="/appointment">View History</Link>
                  </button>
                </div>
              </div>
            </div>
          </card>

          <card>
            <div class="relative px-1 mt-10  ">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="flex items-baseline">
                  <span class="p-1 bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    1
                  </span>
                </div>
                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  Submit Medical Records
                </h4>
                <div class="mt-1">Save to blockchain</div>
                <div class="mt-4">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white  text-md font-semibold py-2 px-4 rounded">
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </card>

          <card>
            <div class="relative px-1 mt-10 w-[260px]  ">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="flex items-baseline">
                  <span class="p-1 bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    0
                  </span>
                </div>
                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  Add Doctor
                </h4>
                <div class="mt-1">Add doctor from the list</div>
                <div class="mt-4">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white  text-md font-semibold py-2 px-4 rounded">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </card>
        </div>
      </main>
    </div>
  );
}

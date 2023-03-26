export default function Appointment() {
  return (
    <div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Doctor Name
              </th>
              <th scope="col" class="px-6 py-3">
                Appointment Date
              </th>
              <th scope="col" class="px-6 py-3">
                Appointment Time
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>

              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

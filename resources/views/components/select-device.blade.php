                               <li class="pt-4">
                                   <label for="device_idd" class="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-400">
                                       {{ __('Select Device') }}
                                   </label>
                                   <select id="device_idd" name="device_id"
                                       class="w-full rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/30">
                                       <option value="" disabled selected>{{ __('Choose device') }}</option>
                                       @foreach ($numbers as $device)
                                           @if (Session::has('selectedDevice') && Session::get('selectedDevice')['device_body'] == $device->body)
                                               <option value="{{ $device->id }}" selected>{{ $device->body }} ({{ $device->status }})</option>
                                           @else
                                               <option value="{{ $device->id }}">{{ $device->body }} ({{ $device->status }})</option>
                                           @endif
                                       @endforeach
                                   </select>
                               </li>

                               <script>
                                   //  on select device
                                   $('#device_idd').on('change', function() {
                                       var device = $(this).val();
                                       $.ajax({
                                           url: "{{ route('home.setSessionSelectedDevice') }}",
                                           type: "POST",
                                           data: {
                                               _token: "{{ csrf_token() }}",
                                               device: device
                                           },
                                           success: function(data) { // reload page
                                               if (data.error) {
                                                   toastr.error(data.msg);
                                                   // reload in 1 second
                                                   setTimeout(function() {
                                                       location.reload();
                                                   }, 1000);
                                               } else {
                                                   toastr.success(data.msg);
                                                   // reload in 1 second
                                                   setTimeout(function() {
                                                       location.reload();
                                                   }, 1000);
                                               }
                                           }
                                       });
                                   });
                               </script>

<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="bg-slate-400 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4">
        <div class="w-full md:w-1/2">
            @livewire('text-animation')
        </div>
        <div class="w-full md:w-1/2">
            @livewire('animated-image')
        </div>
    </div>

</x-app-layout>

<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="bg-slate-400">
        @livewire('text-animation')

        @livewire('animated-image')
    </div>
</x-app-layout>

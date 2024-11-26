<script>
    import "tailwindcss/tailwind.css";
</script>
<div class="flex flex-row justify-between gap-x-1.5 bg-[#FAB12F]" id="logo">
    <div class="flex flex-row gap-x-1.5 items-center">
        <a href="/">
            <img class="w-16 p-2" src="LOGO-nobg-cut.png" alt="Company logo of ChickenTurtle" />
        </a>
        <div class="flex flex-col">
            <h1 class="font-bold text-4xl">
                <a href="/">ChickenTurtle</a>
            </h1>
            <p class="m-0 p-0 text-sm italic">We dive deep like turtles, but act fast like chickens</p>
        </div>
    </div>
    <div class="flex flex-row items-center">
        <a href="/app" class="btn btn-ghost text-xl">Demo</a>
        <a href="/mission" class="btn btn-ghost text-xl">Mission</a>
        <a href="/about" class="btn btn-ghost text-xl">About</a>
        <a href="/contact" class="btn btn-ghost text-xl">Contact</a>
    </div>
</div>
<div class="flex-1 bg-[#FEF3E2] p-3 h-screen">
    <slot />
</div>
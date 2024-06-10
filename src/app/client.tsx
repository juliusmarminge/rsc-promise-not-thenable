"use client";

import { use } from "react";

export function Thenable({ promise }: { promise: Promise<string>}) {
    // Revive the Date (using .then())
    const date = use(promise.then(s => new Date(s)))
    return <div>{date.toLocaleString()}</div>
}

export function Awaited({ promise }: { promise: Promise<string>}) {
    // Revive the Date (async iife)
    const date = use((async () => new Date(await promise))())
    return <div>{date.toLocaleString()}</div>
}
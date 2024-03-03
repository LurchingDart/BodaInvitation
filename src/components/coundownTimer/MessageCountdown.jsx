import React from 'react'

const MessageCountdown = ({ message }) => {
    return (
        <header className="mx-auto mt-2">
            <h1 className="text-center font-dancing text-3xl">
                {message ? message : "19 | ABRIL | 2024"}
            </h1>
        </header>
    )
}

export default MessageCountdown;
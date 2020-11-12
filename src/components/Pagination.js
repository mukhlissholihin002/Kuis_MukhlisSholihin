import React from 'react'

export default function Pagination({ prev, next}) {
    return (
        <div className="mt-2">
            {(prev) && <button onClick={prev} className="btn btn-sm btn-outline-secondary mx-1">Prev</button>}
            {(next) && <button onClick={next} className="btn btn-sm btn-secondary">Next</button>}
        </div>
    )
}

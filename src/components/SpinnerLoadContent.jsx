import React from 'react'

export default function SpinnerLoadContent({ status, loading }) {
    return (
        <div className="loadingio-spinner-double-ring-r4le9v9xha shadow-sm nc-header-bg" style={{backgroundColor: "hsla(0, 0%, 70%, 0)"}}>
            <div className="flex clup" style={{flexDirection: "column"}}>
                <div className="ldio-o9l06kyh74r">
                    <div />
                    <div />
                    <div>
                    <div />
                    </div>
                    <div>
                    <div />
                    </div>
                </div>
                {status && <span style={{display: "block",position: "relative",top: "-11rem", fontSize: "20px", fontWeight: "700",}}>{status}</span>}
            </div>

        </div>

    )
}

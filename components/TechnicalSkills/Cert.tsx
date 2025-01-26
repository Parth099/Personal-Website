import Image from "next/image";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";

export interface CertInfo {
    path: string;
    certName: string;
    certEvidence?: string;
}

export default function Cert({ cert }: { cert: CertInfo }) {
    return (
        <Tooltip title={cert.certName} className="" placement="top" arrow>
            <Link href={cert.certEvidence ?? "#"} target="_blank">
                <Image
                    src={cert.path}
                    alt={`icon of ${cert.certName}`}
                    width="75"
                    height="75"
                    className="object-contain w-auto h-imgInit md-max:h-14 mid-max:h-16"
                />
            </Link>
        </Tooltip>
    );
}

export function Certs({ certs }: { certs: CertInfo[] }) {
    return (
        <section className="flex flex-wrap gap-0.5 ">
            {certs.map((_cert, i) => {
                return <Cert key={i} cert={_cert} />;
            })}
        </section>
    );
}

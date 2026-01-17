import { Link } from 'react-router-dom';
import naycolcs from '../../assets/certificates/naycol/naycolcs.pdf';
import naycolfr from '../../assets/certificates/naycol/naycolfr.pdf';
import naycolic from '../../assets/certificates/naycol/naycolic.pdf';
import naycolpt from '../../assets/certificates/naycol/naycolpt.pdf';

export default function NaycolCert() {
    const certificates = [
        { title: 'Computer Science', file: naycolcs },
        { title: 'Periodic Table', file: naycolpt },
        { title: 'Final Report', file: naycolfr },
        { title: 'International Committee', file: naycolic },
    ];

    return (
        <div className="min-h-screen bg-black text-white p-8 pt-32">
            <div className="max-w-6xl mx-auto">
                <Link to="/" className="text-neutral-400 hover:text-white transition-colors mb-8 inline-block">
                    ← Back to Home
                </Link>
                <h1 className="text-4xl font-bold mb-8">Nayland College Certificates</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certificates.map((cert, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <h2 className="text-xl font-semibold text-neutral-200">{cert.title}</h2>
                            <div className="aspect-[3/4] w-full border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900">
                                <object
                                    data={cert.file}
                                    type="application/pdf"
                                    className="w-full h-full"
                                >
                                    <p className="p-4 text-center text-neutral-400">
                                        Your browser does not support PDFs.
                                        <a href={cert.file} className="text-white hover:underline ml-1">Download the PDF</a>
                                        .
                                    </p>
                                </object>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

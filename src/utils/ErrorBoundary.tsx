import { Component, type ErrorInfo } from 'react';
import type { ReactNode } from 'react';
import icons from '@utils/preload-image';

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error: Error) {
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({ errorInfo });
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        });
    };

    render() {
        if (this.state.hasError) {
            const { fallback } = this.props;

            if (fallback) {
                return fallback;
            }

            return (
                <div className="flex flex-col items-center justify-center h-screen bg-[#357EC7] text-white p-6 select-none">
                    <div className="flex flex-col items-start gap-5 min-w-[300px] max-w-[1000px]">
                        <span className="text-9xl">{':('}</span>
                        <span className="text-left text-2xl">
                            Your PC ran into a problem and needs to restart. We're just collecting some error info, and
                            then we'll restart for you.
                        </span>
                        <div className="flex sm:flex-row flex-col gap-2">
                            <div className="w-[100px] h-[100px]">
                                <img loading="eager" className="w-full h-full" alt="QR Code" src={icons.QRImg} />
                            </div>
                            <div className="flex flex-col justify-between items-start gap-5 grow">
                                <span>
                                    For more infomation about this issue and possible fixed, visit
                                    https://www.windows.com/stopcode
                                </span>
                                <div className="flex flex-col">
                                    <span>If you call a support person, give them this info: </span>
                                    <span>Stop code: {this.state.error?.message || 'I_DONT_KNOW'}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    window.location.reload();
                                }}
                                className="w-[100px] py-2 bg-white text-[#357EC7]"
                            >
                                Restart
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;

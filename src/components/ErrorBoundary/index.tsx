import React from "react";
import { ErrorInfo } from "react-dom/client";
import StatusView from "../StatusView";

import "./index.scss";

type ErrorBoundaryProps = {
    children?: React.ReactNode;
};

type ErrorBoundaryState = {
    hasError: boolean;
    errors: {
        error: Error;
        errorInfo: ErrorInfo;
    } | null;
};

export default class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: {}) {
        super(props);

        this.state = {
            hasError: false,
            errors: null,
        };

        window.onerror = (msg, url, lineNo, columnNo, error) => {
            // Не критические ошибки, React не падает
            this.log({
                isCritical: false,
                message: msg ?? null,
                url: url ?? null,
                lineNo: lineNo ?? null,
                columnNo: columnNo ?? null,
                userAgent: navigator?.userAgent,
                href: window.location?.href,
                stack: error?.stack ?? null,
            });

            return false;
        };
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return {
            hasError: true,
            errors: null,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Критические ошибки, React падает
        this.log({
            isCritical: true,
            message: error?.message ?? null,
            name: error?.name ?? null,
            stack: error?.stack ?? null,
            userAgent: navigator?.userAgent,
            href: window.location?.href,
            componentStack: errorInfo?.componentStack ?? "componentStack",
        });

        this.setState({
            errors: {
                error,
                errorInfo,
            },
        });
    }

    log = (trace: any) => {
        if (process.env.NODE_ENV === "production") {
            // TODO logger
        } else {
            console.log("--------------------------");
            console.log("Trace:", trace);
            console.log("--------------------------");
        }
    };

    render() {
        if (this.state.hasError) {
            const msg = this.state?.errors?.error?.message;

            return (
                <div className="error-boundary">
                    <StatusView
                        title="Ой! Что-то пошло не так..."
                        description={
                            msg ||
                            "Приносим извинения, произошла непредвиденная ошибка"
                        }
                    />
                </div>
            );
        }

        return this.props.children;
    }
}

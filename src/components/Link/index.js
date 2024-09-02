import NextLink from "next/link"
import LinkEstilizado from '../LinkEstilizado';

export default function Link({children, href, ...props}) {
    return (
        <NextLink href={href} legacyBehavior>
                <LinkEstilizado {...props}>{children}</LinkEstilizado>
        </NextLink>
    );
}
import ContextMenu from '@/app/components/ContextMenu';
import Resume from '@/app/components/Resume';
import CoverLetter from '@/app/components/CoverLetter';

export default function ResumePage() {
    return (
        <ContextMenu>
            <Resume />
            <CoverLetter />
        </ContextMenu>
    );
}


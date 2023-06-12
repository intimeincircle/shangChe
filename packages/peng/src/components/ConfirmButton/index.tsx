import { Button, Text } from '@mantine/core';
import { useModals } from '@mantine/modals';
import { useTranslation } from 'react-i18next';

export function ConfirmButtonDemo() {
    const modals = useModals();
    const {t} = useTranslation()

    const openConfirmModal = () => modals.openConfirmModal({
        title: t('Please confirm your action'),
        children: (
            <Text size="sm">
                {
                    t('This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed.')
                }
            </Text>
        ),
        labels: { confirm: t('Confirm'), cancel: t('Cancel') },
        onCancel: () => console.log('Cancel'),
        onConfirm: () => console.log('Confirmed'),
    });

    return <Button onClick={(e) => {
        openConfirmModal(e)
        // e.stopPropagation();
    }}>Open confirm modal</Button>;
}
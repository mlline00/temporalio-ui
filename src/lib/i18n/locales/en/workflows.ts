export const Namespace = 'workflows' as const;

export const Strings = {
  'recent-workflows': 'Recent Workflows',
  'workflows-count_one': '{{count, number}} workflow',
  'workflows-count_other': '{{count, number}} workflows',
  'filtered-workflows-count':
    'Results {{filtered, number}} of {{total, number}} workflows',
  terminate: 'Terminate',
  cancel: 'Cancel',
  reason: 'Reason',
  'batch-operation-modal-title': '{{action}} Workflows',
  'batch-operation-confirmation-placeholder': '{{action}} from the Web UI',
  'batch-operation-confirmation-placeholder-by-email':
    '{{action}} from the Web UI by {{email}}',
  'batch-operation-confirmation-all':
    'Are you sure you want to {{action}} all workflows matching the following query? This action cannot be undone.',
  'batch-operation-count-disclaimer':
    'Note: The actual count of workflows that will be affected is the total number of running workflows matching this query at the time of clicking "{{action}}".',
  'batch-cancel-confirmation_one':
    'Are you sure you want to cancel {{count, number}} running workflow?',
  'batch-cancel-confirmation_other':
    'Are you sure you want to cancel {{count, number}} running workflows?',
  'batch-terminate-confirmation_one':
    'Are you sure you want to terminate {{count, number}} running workflow?',
  'batch-terminate-confirmation_other':
    'Are you sure you want to terminate {{count, number}} running workflows?',
  'batch-operation-confirmation-input-hint':
    'If you supply a custom reason, "{{placeholder}}" will be appended to it.',
  'batch-terminate-all-success':
    'The batch $t(terminate) request is processing in the background.',
  'batch-cancel-all-success':
    'The batch $t(cancel) request is processing in the background.',
  'batch-terminate-success': 'Successfully $t(terminated) {{count}} workflows.',
  'batch-cancel-success': 'Successfully $(canceled) {{count}} workflows.',
  'configure-workflows': 'Configure Workflow List',
  'configure-workflows-description':
    'Add (<1></1>), re-arrange (<2></2>), and remove (<3></3>), Workflow Headings to personalize the Workflow List Table.',
  'all-statuses': 'All Statuses',
  running: 'Running',
  'timed-out': 'Timed Out',
  completed: 'Completed',
  failed: 'Failed',
  'contd-as-new': "Cont'd as New",
  'continued-as-new': 'ContinuedAsNew',
  terminated: 'Terminated',
  canceled: 'Canceled',
  paused: 'Paused',
  'n-selected': '{{count, number}} selected',
  'all-selected': 'All {{count, number}} selected.',
  'select-all': 'select all {{count, number}}',
  'request-cancellation': 'Request Cancellation',
} as const;

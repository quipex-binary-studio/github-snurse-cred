const getNonMatchingLabelsAssigned = (nonMatchingLabels: string[], assignedLabelNames: string[]) => {
    return assignedLabelNames.filter(assignedLabel => nonMatchingLabels.includes(assignedLabel));
};

export { getNonMatchingLabelsAssigned };

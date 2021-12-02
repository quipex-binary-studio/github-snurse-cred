const checkMatchingLabelNotAssigned = (matchingLabelName: string, assignedLabelNames: string[]) => {
    return matchingLabelName && !assignedLabelNames.includes(matchingLabelName);
};

export { checkMatchingLabelNotAssigned };

/*-----------------------------------------------------------------------------------------------
 * Copyright (c) 2019 Red Hat, Inc. and others
 * Licensed under the MIT License. See LICENSE file in the project root for license information.
 *
 * SPDX-License-Identifier: MIT
 *-----------------------------------------------------------------------------------------------
*/
const moment = require('moment')


const timeAgo = (utcTime, currTime) => {
    const past = moment(utcTime)
    const result = past.from(moment(currTime))
    return result
}


const formatMessages = (messages) => {
    const currTime = moment.now()
    messages.forEach(message => {
        message.timeAgo= timeAgo(message.timestamp, currTime)
    });
    return messages

}

module.exports = {
    timeAgo: timeAgo,
    formatMessages: formatMessages
}
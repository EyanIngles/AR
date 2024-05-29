// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract AR {
    address public consultant;
    address public client;
    uint256 public ARPoints;
    string public rewards;

    // things will need ----


    // balance(points)
    // rewards to be redeemed[]
    constructor() {
        consultant = msg.sender;
    }

    function sendPoints (uint256 _points, address _client) public payable {
        require(msg.sender == consultant, 'you are not a consultant.');
        require(_points >= 1, "Point amount must be greater than 1.");
        
    }
}
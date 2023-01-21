// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Dappazon {
    address public owner;

    struct Item {
        uint256 id;
        string name;
        string category;
        string image;
        uint256 cost;
        uint256 rating;
        uint256 stock;
    }

    event List(string name, uint256 cost, uint256 quantity);

    mapping(uint256 => Item) public items;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // List products
    function list(
        uint256 _id,
        string memory _name,
        string memory _category,
        string memory _image,
        uint256 _cost,
        uint256 _rating,
        uint256 _stock
    ) public onlyOwner {
        // Create Item
        Item memory item = Item(
            _id,
            _name,
            _category,
            _image,
            _cost,
            _rating,
            _stock
        );

        items[_id] = item;

        // Add Item to mapping
        items[_id] = item;

        // Emit event
        emit List(_name, _cost, _stock);
    }

    // Buy products
    function buy(uint256 _id) public payable {
        // Receive Crypto

        // Create an order

        // Substract stock

        // Emit event
    }

    // Withdraw funds
}
